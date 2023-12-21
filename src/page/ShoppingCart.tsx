import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartItemsState } from "../atoms";
import { CartItemData } from "../interface/types";

import {
  // totalPriceSelector,
  // deliveryFeeSelector,
  quantityState,
  selectProduct,
} from "../atoms";

import { getCartAPI, putCartCountChangeAPI } from "../api/cartAPI";

import { MyButton } from "../component/common/Button/CommonButton";
import CartItem from "../component/common/Cart/CartItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 54px auto;

  & h2 {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin: 54px 0;
    margin-top: auto; // 수정
  }
`;

const CheckBox = styled.input`
  appearance: none;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--main-color);
  border-radius: 50%;

  &:checked::after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    background-color: #21bf48;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

const CartHeader = styled.section`
  width: 100%;
  padding: 18px 30px;
  border-radius: 10px;
  margin-bottom: 35px;
  text-align: center;

  background-color: var(--greyF2);
  display: grid;
  grid-template-columns: 0.2fr 1.8fr 1fr 1fr;
  align-items: center;
  font-size: 18px;
`;

const TotalPriceBox = styled.section`
  width: 100%;
  padding: 45px 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: var(--greyF2);
  border-radius: 10px;
  margin-top: 80px;

  & div {
    text-align: center;
    line-height: 35px;
    & span {
      margin-top: 10px;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

const OrderButton = styled(MyButton)`
  margin-top: 40px;
  font-size: 24px;
  font-weight: 700;
`;

const PaySpan = styled.p`
  color: var(--red57);

  & strong {
    font-size: 36px;
    font-weight: 700;
  }
`;

const NoCartdiv = styled.div`
  display: flex;
  align-items: center;
  & strong {
    font-size: 18px;
    font-weight: 700;
  }
  & p {
    color: var(--gray76);
    font-size: 14px;
    font-weight: 400;
  }
`;

// 구현기능
//1. 장바구니목록 불러와서 보여주기 o
//2. 해당 상품 수량 변경 기능 o
//3. 구매할 아이템에 유무를 블리언 값으로 item 컴포넌트에 전달 o
//3-1. 전체 선택 기능(개별기능은 아이템에서 제어중)
//3-2. 값을 넘겼는데 우선 쇼핑 카트에서 선택되면 구매할 배열에 따로 해당상품 담아주는 작업이 필요
export default function ShoppingCart() {
  // const cartItems = useRecoilValue(cartItemsState);
  // const totalPrice = useRecoilValue(totalPriceSelector);
  // const deliveryFee = useRecoilValue(deliveryFeeSelector);

  // const [selectedProduct, setSelectedProduct] = useRecoilState(selectProduct);
  const [orderList, setOrderList] = useState<CartItemData[]>([]);
  // const [isChecked, setIsChecked] = useState(true);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const selectProducted = useRecoilValue(selectProduct);

  const checkedItems =
    cartItems.length > 0 ? cartItems.every((item) => item.is_active) : false;

  const [isAllChecked, setIsAllChecked] = useState(checkedItems);

  console.log("cartItems", cartItems);
  console.log("checkedItems", checkedItems);

  // useEffect(() => {
  //   // 모든 아이템이 체크되어 있는지 확인
  //   const allChecked = checkedItems.every((item) => item);
  //   setIsAllChecked(isAllChecked);
  //   console.log("되니?");
  // }, [isAllChecked]);

  // console.log("리코일 총금액, 배송료 값 확인중", totalPrice, deliveryFee);
  // console.log("선택된 값", selectedItems);
  // console.log("totalPrice 값: ", totalPrice);

  // const handleSelectProduct = (cart: CartItemData, checked: boolean) => {
  //   console.log("체크하면 선택된 값이 뭐야?", cart);
  //   if (checked) {
  //     setSelectedProduct((prev) => [...prev, cart]);
  //     setSelectedProduct((prev) => Array.from(new Set(prev)));
  //   } else {
  //     setSelectedProduct((prev) =>
  //       prev.filter((item) => item.product_id !== cart.product_id)
  //     );
  //   }
  //   console.log("선택된 아이템 배열", selectedProduct);
  // };

  // const handleChecked = useCallback(() => {
  //   // setSelectedProduct([]);
  //   setIsChecked((prev) => !prev);
  //   console.log("allChecked", isChecked);
  //   if (isChecked) {
  //     setOrderList([]);
  //   }
  // }, []);

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(e.target.checked);
  // };

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    console.log("###확인중###");
    // const newCheckedItems = [...checkedItems];
    // newCheckedItems[index] = !isChecked;
    // setCheckedItems(newCheckedItems);
  };

  // const handleChecked = () => {
  //   setIsAllChecked(!isAllChecked);
  //   console.log("allChecked", isAllChecked);
  // };

  const payment = selectProducted.reduce(
    (acc: any, cur: any) => {
      if (cur.is_active) {
        return (acc = {
          price: acc.price + cur.price * cur.quantity,
          shipping_fee: acc.shipping_fee + cur.shipping_fee,
        });
      }
      return acc;
    },
    { price: 0, shipping_fee: 0, stock: 0 }
  );

  const totalPrice = payment.price.toLocaleString();
  const deliveryFee = payment.shipping_fee.toLocaleString();
  const totalPaymentPrice = (
    payment.price + payment.shipping_fee
  ).toLocaleString();

  useEffect(() => {
    const getCartData = async () => {
      try {
        const res = await getCartAPI();
        if (res) {
          setCartItems(res);
          setOrderList((prev) => [...res]);
          // setSelectedProduct(res);
          // localStorage.setItem("cart", JSON.stringify(res));
        }
      } catch (error) {
        console.error("장바구니 데이터 불러오기 실패", error);
      }
    };
    getCartData();
  }, []);

  const handleAllCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cartItems.map((item) =>
      item.is_active !== e.target.checked ? handleItemCheck(item) : item
    );
    console.log("%%%%%%%%");
  };

  // 전체 선택을 할 경우, 장바구니 리스트를 돌면서 펄스인 애들만 선별해야하고 애들을 다시 체크로 변경해서 자식요소의 개별함수를 실행시킴

  const handleItemCheck = async (item: any) => {
    try {
      await putCartCountChangeAPI(
        item.cart_item_id,
        item.product_id,
        item.quantity,
        !item.is_active
      );
      const updatedCartItem = { ...item, is_active: item.is_active };
      console.log("콘솔 업뎃이트", updatedCartItem);

      const updatedCartItems = cartItems.map((item) =>
        item.cart_item_id === updatedCartItem.cart_item_id
          ? updatedCartItem
          : item
      );
      setCartItems(updatedCartItems); // Recoil 상태를 업데이트합니다.
    } catch (error) {
      console.error("상품 구매에 실패했습니다.", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <h2>장바구니</h2>
        <CartHeader>
          <CheckBox
            type="checkbox"
            checked={checkedItems}
            onChange={handleAllCheckboxChange}
            // onClick={handleChecked}
          />
          <div>상품정보</div>
          <div>수량</div>
          <div>상품금액</div>
        </CartHeader>
        {cartItems.length !== 0 ? (
          cartItems.map((item: any, index: number) => (
            <CartItem
              key={index}
              id={item.cart_item_id}
              cartData={item}
              // isChecked={selectedItems.includes(item.cart_item_id)}
              isAllChecked={isAllChecked}
              orderList={orderList}
              setOrderList={setOrderList}
              onCheckboxChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckboxChange(index, e.target.checked)
              }
              // handleSelectProduct={handleSelectProduct}
            />
          ))
        ) : (
          <NoCartdiv>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <p>원하는 상품을 장바구니에 담아보세요!</p>
          </NoCartdiv>
        )}
        <TotalPriceBox>
          <div>
            <p>총 상품금액</p>
            <p>
              <span>{totalPrice.toLocaleString()}</span>원
            </p>
          </div>
          <div>
            <p>상품할인</p>
            <p>
              <span>0</span>원
            </p>
          </div>
          <div>
            <p>배송비</p>
            <p>
              <span>{deliveryFee.toLocaleString()}</span>원
            </p>
          </div>
          <div>
            <p>결제예정금액</p>
            <PaySpan>
              <strong>{(totalPrice + deliveryFee).toLocaleString()}</strong>원
            </PaySpan>
          </div>
        </TotalPriceBox>
        <OrderButton $bgColor="active">주문하기</OrderButton>
      </Wrapper>
    </Container>
  );
}
