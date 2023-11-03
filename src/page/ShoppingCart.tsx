import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { cartItemsState } from "../atoms";

import { useRecoilStoreID, useRecoilValue, useSetRecoilState } from "recoil";
import {
  totalPriceSelector,
  deliveryFeeSelector,
  quantityState,
} from "../atoms";

import { getCartAPI } from "../api/cartAPI";

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

interface CartItem {
  cart_item_id: string;
  quantity: number;
  item_details: {
    price: number;
    shipping_fee: number;
  };
}

export default function ShoppingCart() {
  const cartItems = useRecoilValue(cartItemsState);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const deliveryFee = useRecoilValue(deliveryFeeSelector);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(true);

  console.log("리코일 총금액, 배송료 값 확인중", totalPrice, deliveryFee);
  console.log("선택된 값", selectedItems);
  console.log("totalPrice 값: ", totalPrice);

  const handleCheckboxChange = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleAllCheckboxChange = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]); // 선택된 항목들 해제
      setIsAllChecked(false);
    } else {
      const allItemIds = cartItems.map((item: any) => item.cart_item_id);
      setSelectedItems(allItemIds); // 모든 항목 선택
      setIsAllChecked(true);
    }

    console.log("isAllChecked", isAllChecked ? true : false);
  };
  const handleRadioClick = () => {
    setIsAllChecked(!isAllChecked); // 체크박스 클릭할 때 불을 들어오고 나가도록 설정
  };

  return (
    <Container>
      <Wrapper>
        <h2>장바구니</h2>
        <CartHeader>
          <CheckBox
            type="checkbox"
            checked={isAllChecked}
            onChange={handleAllCheckboxChange}
            onClick={handleRadioClick}
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
              isChecked={selectedItems.includes(item.cart_item_id)}
              onCheckboxChange={handleCheckboxChange}
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
