import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";
import { cartItemsState, selectProduct } from "../atoms";
import { CartItemType } from "../interface/types";

import { getCartAPI } from "../api/cartAPI";

import { MyButton } from "../component/common/Button/CommonButton";
import CartItem from "../component/common/Cart/CartItem";
import TotalPrice from "../component/common/Cart/TotalPrice";

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

const OrderButton = styled(MyButton)`
  margin-top: 40px;
  font-size: 24px;
  font-weight: 700;
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

export default function ShoppingCart() {
  // const totalPrice = useRecoilValue(totalPriceSelector);
  // const deliveryFee = useRecoilValue(deliveryFeeSelector);

  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [selectedProduct, setSelectedProduct] = useRecoilState(selectProduct);

  const calculatePayment = (selectedProduct: CartItemType[]) => {
    return selectedProduct.reduce(
      (acc: any, cur: any) => ({
        // console.log("check", acc, cur);

        totalPrice:
          acc.totalPrice + (cur.item_details.price || 0) * (cur.quantity || 0),
        totalShipping_fee:
          acc.totalShipping_fee + (cur.item_details.shipping_fee || 0),
      }),
      { totalPrice: 0, totalShipping_fee: 0 }
    );
  };
  const payment = calculatePayment(selectedProduct);

  console.log("payment", payment);
  console.log("selectedProduct", selectedProduct);

  // is_active 변경마다 바뀜
  useEffect(() => {
    const activeProducts = cartItems.filter((el: CartItemType) => el.is_active);
    setSelectedProduct(activeProducts);

    console.log("quantyccccc", selectedProduct);
  }, [cartItems]); // cartItems가 변경될 때마다 useEffect 실행

  // useEffect(() => {
  //   const payment = calculatePayment(selectedProduct);
  //   console.log("payment", payment);
  // }, [selectedProduct]);

  const checkedItems =
    cartItems.length > 0 ? cartItems.every((item) => item.is_active) : false;

  console.log("cartItems", cartItems);
  console.log("checkedItems", checkedItems);

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

  // const totalPrice = payment.price.toLocaleString();
  // const deliveryFee = payment.shipping_fee.toLocaleString();
  // const totalPaymentPrice = (
  //   payment.price + payment.shipping_fee
  // ).toLocaleString();

  useEffect(() => {
    const getCartData = async () => {
      try {
        const res = await getCartAPI();
        if (res) {
          setCartItems(res);
          // const activeProducts = res.filter((el: CartItemType) => el.is_active);
          // setSelectedProduct(activeProducts);
        }
      } catch (error) {
        console.error("장바구니 데이터 불러오기 실패", error);
      }
    };
    getCartData();
  }, []);

  const handleAllCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cartItems.map((item) =>
      item.is_active !== e.target.checked
        ? handleItemCheck(item.cart_item_id)
        : item
    );
    console.log("%%%%%%%%");
  };

  // 전체 선택을 할 경우, 장바구니 리스트를 돌면서 펄스인 애들만 선별해야하고 애들을 다시 체크로 변경해서 자식요소의 개별함수를 실행시킴
  const handleItemCheck = async (id: any) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.cart_item_id === id
          ? { ...item, is_active: !item.is_active }
          : item
      )
    );
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
              isAllChecked={item.is_active}
              // orderList={orderList}
              // setOrderList={setOrderList}
            />
          ))
        ) : (
          <NoCartdiv>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <p>원하는 상품을 장바구니에 담아보세요!</p>
          </NoCartdiv>
        )}
        <TotalPrice payment={payment} />
        <OrderButton $bgColor="active">주문하기</OrderButton>
      </Wrapper>
    </Container>
  );
}
