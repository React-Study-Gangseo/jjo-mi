import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCartAPI } from "../api/cartAPI";
import { productAPI } from "../api/productAPI";

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

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [isItems, setIsItems] = useState(true);
  // const [];

  // api연결
  useEffect(() => {
    const getCartItems = async () => {
      const cartDatas = await getCartAPI();
      console.log("최종 통신후 데이터들어옴: ", cartDatas);
      if (cartDatas) {
        setCartItems(cartDatas);
        // setIsItems(true);
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
        {isItems ? (
          cartItems.map((item: any, index: number) => (
            <CartItem key={index} cartData={item} />
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
              <span>46,500</span>원
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
              <span>0</span>원
            </p>
          </div>
          <div>
            <p>결제예정금액</p>
            <PaySpan>
              <strong>46,500</strong>원
            </PaySpan>
          </div>
        </TotalPriceBox>
        <OrderButton $bgColor="active">주문하기</OrderButton>
      </Wrapper>
    </Container>
  );
}
