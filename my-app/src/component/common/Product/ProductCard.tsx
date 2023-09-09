import React from "react";
import styled from "styled-components";

interface Product {
  // id: number;
  // imageUrl: string;
  // store: string;
  // name: string;
  // price: number;
  product_id: number;
  product_name: string;
  image: string;
  price: number;
  store_name: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const basicImg = "http://www.bizforms.co.kr/form/image/thumb_ing.gif";

  const { product_id, image, store_name, product_name, price } = product;

  const handleClick = () => {
    // 클릭 이벤트 핸들러 구현
    console.log("Product clicked:", product_id);
    // 추가적인 로직 처리 가능
  };
  return (
    <CardContainer onClick={handleClick}>
      <ProductImg src={image || basicImg} alt={product_name || "포근한 전구"} />
      <ProductInfo>
        <MarketName>
          {store_name || "마켓 이름: 우당탕탕 빈티지 인테리어샵"}
        </MarketName>
        <Title>{product_name}</Title>
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
