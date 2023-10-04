import React, { useState } from "react";
import styled from "styled-components";

import { CountButton } from "../Button/CountButton";
import { MyButton } from "../Button/CommonButton";

import icon_delete from "../../../assets/images/icon-delete.svg";
// import { isPropValid } from "@emotion/is-prop-valid";

const CartItemWrapper = styled.article`
  border: 1px solid var(--grayE0);
  border-radius: 10px;
  padding: 20px 30px;
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: 0.2fr 1.8fr 1fr 1fr;

  align-items: center;
  margin-bottom: 10px;

  & img {
    width: 160px;
    height: 160px;
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

const ProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InfoDiv = styled.div`
  & p {
    margin-bottom: 10px;
  }

  & p:nth-child(1) {
    color: var(--grey76);
    font-size: 14px;
  }

  & strong {
    font-weight: 700;
  }
  & p:nth-child(4) {
    margin-top: 30px;
    font-size: 14px;
    color: var(--grey76);
  }
`;
const CountBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PriceDiv = styled.div`
  color: var(--red57);
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`;

const Button = styled(MyButton)`
  width: 130px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 18px;
  top: 18px;
  background: transparent;
  width: 22px;
  height: 22px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export default function CartItem() {
  const [count, setCount] = useState(1);

  const handleCountChange = (value: number) => {
    setCount(value);
  };

  const [isPropValid, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    setIsVisible(false);
    // 여기서 필요한 경우 추가적인 액션 (예: 서버에 삭제 요청 보내기) 수행
  };

  // if (!isVisible) {
  //   return null;
  // }
  return (
    <CartItemWrapper>
      <CheckBox type="radio" />
      <CloseButton onClick={handleDeleteClick}>
        <img src={icon_delete} alt="상품제거 버튼" />
      </CloseButton>
      <ProductInfoWrapper>
        <img src="https://item.kakaocdn.net/do/d2a0a7643a2133762001a4c50e588db682f3bd8c9735553d03f6f982e10ebe70" />
        <InfoDiv>
          <p>{"백엔드글로벌"}</p>
          <p>{"딥러닝 개발자 무릎담요"}</p>
          <p>
            <strong>{"17,500"}</strong>원
          </p>
          <p>택배배송 / 무료배송</p>
        </InfoDiv>
      </ProductInfoWrapper>
      <CountBtnWrapper>
        <CountButton initialValue={1} onChange={handleCountChange} />
      </CountBtnWrapper>
      <PriceDiv>
        <p>
          <strong>{"29,300".toLocaleString()}</strong>원
        </p>
        <Button $bgColor="active">주문하기</Button>
      </PriceDiv>
    </CartItemWrapper>
  );
}
