import React from "react";
import styled from "styled-components";

export default function ProductCard() {
  return (
    <CardContainer>
      <ProductImg
        src="https://i.pinimg.com/564x/47/69/c4/4769c47ac06c7f908fd0179293e0fefa.jpg"
        alt="포근한 전구"
      />
      <ProductInfo>
        <MarketName>마켓 이름: 우당탕탕 빈티지 인테리어샵</MarketName>
        <Title>이거 있으면 코드 쓰는 스트레스 완화되는 스탠드</Title>
        <Price>
          <strong>29,300</strong>원
        </Price>
      </ProductInfo>
    </CardContainer>
  );
}
const CardContainer = styled.article`
  max-width: 380px;
  max-height: 500px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 380px;
  border-radius: 10px;
  border: 1px solid var(--C4C4C4);
  margin-bottom: 16px;
`;

const ProductInfo = styled.div`
  line-height: 2;
`;
const MarketName = styled.p`
  font-size: 16px;
  color: var(--grey76);
`;

const Title = styled.p``;

const Price = styled.p`
  & strong {
    font-size: 24px;
    font-weight: 700;
  }
`;
