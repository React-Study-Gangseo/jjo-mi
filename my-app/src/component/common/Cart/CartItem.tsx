import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { quantityState, cartItemState, cartItemsState } from "../../../atoms";

import { putCartCountChangeAPI } from "../../../api/cartAPI";

import { CountButton } from "../Button/CountButton";
import { MyButton } from "../Button/CommonButton";
import icon_delete from "../../../assets/images/icon-delete.svg";

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
  gap: 36px;
  & img {
    border-radius: 10px;
  }
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

export default function CartItem({ id, cartData }: { id: any; cartData: any }) {
  const [quantity, setQuantity] = useRecoilState(quantityState(id));

  const [price, setPrice] = useState(0);

  const [cartItem, setCartItem] = useRecoilState(cartItemState(id));
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const baseURL =
    "https://item.kakaocdn.net/do/d2a0a7643a2133762001a4c50e588db682f3bd8c9735553d03f6f982e10ebe70";

  useEffect(() => {
    if (quantity === 0) {
      setQuantity(cartData.quantity);
      setPrice(cartData.item_details.price * quantity);
    }
  }, [cartData.qantity]);

  const handleCountChange = async (value: number) => {
    // console.log("변경된 값 :", value);
    // console.log("클릭이 일어난 값의 아이디 :", id);
    try {
      await putCartCountChangeAPI(id, cartData.product_id, value, true);
      const updatedCartItem = { ...cartData };
      setCartItem(updatedCartItem);
      setCartItems((oldCartItems) =>
        oldCartItems.map((item) =>
          item.cart_item_id === id ? { ...item, quantity: value } : item
        )
      );
      setQuantity(value);
    } catch (error) {
      console.error("상품 수량 변경에 실패했습니다.", error);
    }
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    setIsVisible(false);
    // 여기서 필요한 경우 추가적인 액션 (예: 서버에 삭제 요청 보내기) 수행
  };

  if (!isVisible) {
    return null;
  }

  return (
    <CartItemWrapper>
      <CheckBox type="radio" />
      <CloseButton onClick={handleDeleteClick}>
        <img src={icon_delete} alt="상품제거 버튼" />
      </CloseButton>
      <ProductInfoWrapper>
        <img src={cartData.item_details.image || baseURL} alt="상품이미지" />
        <InfoDiv>
          <p>{cartData.item_details.store_name}</p>
          <p>{cartData.item_details.product_name}</p>
          <p>
            <strong>{cartData.item_details.price.toLocaleString()}</strong>원
          </p>
          <p>
            {`택배배송 / ${
              cartData.item_details.shipping_fee === 0
                ? "무료배송"
                : `${cartData.item_details.shipping_fee.toLocaleString()}원`
            }`}
          </p>
        </InfoDiv>
      </ProductInfoWrapper>
      <CountBtnWrapper>
        <CountButton
          initialValue={cartData.quantity}
          onChange={handleCountChange}
        />
      </CountBtnWrapper>
      <PriceDiv>
        <p>
          <strong>
            {(quantity * cartData.item_details.price).toLocaleString()}
          </strong>
          원
        </p>
        <Button $bgColor="active">주문하기</Button>
      </PriceDiv>
    </CartItemWrapper>
  );
}
