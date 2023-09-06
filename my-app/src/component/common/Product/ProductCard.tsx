import React from "react";
import styled from "styled-components";

interface Product {
  id: number;
  imageUrl: string;
  store: string;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const basicImg = "http://www.bizforms.co.kr/form/image/thumb_ing.gif";

  const { id, imageUrl, store, name, price } = product;

  const handleClick = () => {
    // 클릭 이벤트 핸들러 구현
    console.log("Product clicked:", id);
    // 추가적인 로직 처리 가능
  };
  return (
    <CardContainer onClick={handleClick}>
      <ProductImg src={imageUrl || basicImg} alt={name || "포근한 전구"} />
      <ProductInfo>
        <MarketName>
          {store || "마켓 이름: 우당탕탕 빈티지 인테리어샵"}
        </MarketName>
        <Title>{name}</Title>
        <Price>
          <strong>{price || 29300}</strong>원
        </Price>
      </ProductInfo>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  width: 380px;
  /* min-width: 200px; */
  max-height: 490px;
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
export default ProductCard;
