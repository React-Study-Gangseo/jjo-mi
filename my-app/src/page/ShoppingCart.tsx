import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { cartItemsState } from "../atoms";

import { useRecoilStoreID, useRecoilValue, useSetRecoilState } from "recoil";
import { totalPriceSelector, deliveryFeeSelector } from "../atoms";

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
  const [isItems, setIsItems] = useState(true);

  const setCartItems = useSetRecoilState(cartItemsState);

  const cartItems = useRecoilValue(cartItemsState);

  const totalPrice = useRecoilValue(totalPriceSelector);
  const deliveryFee = useRecoilValue(deliveryFeeSelector);

  console.log("리코일 총금액, 배송료 값 확인중", totalPrice, deliveryFee);

  // 장바구니 api 불러오기 연결
  useEffect(() => {
    const getCartItems = async () => {
      const cartDatas = await getCartAPI();
      console.log("최종 통신후 데이터들어옴: ", cartDatas);
      if (cartDatas) {
        setCartItems(cartDatas);
      } else {
        setIsItems(false);
      }
    };

    getCartItems();
  }, []);

  return (
    <Container>
      <Wrapper>
        <h2>장바구니</h2>
        <CartHeader>
          <CheckBox type="radio" />
          <div>상품정보</div>
          <div>수량</div>
          <div>상품금액</div>
        </CartHeader>
        {cartItems.length !== 0 ? (
          cartItems.map((item: any, index: number) => (
            <CartItem key={index} id={item.cart_item_id} cartData={item} />
          ))
        ) : (
          <NoCartdiv>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <p>원하는 상품을 장바구니에 담아보세요!</p>
          </NoCartdiv>
        )}
        {/* <CartItem /> */}
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
