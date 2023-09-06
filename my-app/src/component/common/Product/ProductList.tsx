import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "상품 A",
    store: "코드칠땐 힐링이 필요",
    price: 10000,
    imageUrl:
      "https://i.pinimg.com/564x/47/69/c4/4769c47ac06c7f908fd0179293e0fefa.jpg",
  },
  {
    id: 2,
    name: "상품 B",
    store: "mega",
    price: 20000,
    imageUrl:
      "https://i.pinimg.com/474x/f7/2b/d6/f72bd6316d47e742a22e1c55dfa0ba3a.jpg",
  },
  {
    id: 3,
    name: "상품 C",
    store: "starbucks",
    price: 10000,
    imageUrl: "",
  },
  {
    id: 4,
    name: "상품 A",
    store: "코드칠땐 힐링이 필요",
    price: 10000,
    imageUrl:
      "https://i.pinimg.com/564x/47/69/c4/4769c47ac06c7f908fd0179293e0fefa.jpg",
  },
  {
    id: 5,
    name: "상품 B",
    store: "mega",
    price: 20000,
    imageUrl:
      "https://i.pinimg.com/474x/f7/2b/d6/f72bd6316d47e742a22e1c55dfa0ba3a.jpg",
  },
  {
    id: 6,
    name: "상품 C",
    store: "starbucks",
    price: 10000,
    imageUrl: "",
  },
];

const ProductList = () => {
  return (
    <GridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(380px, 1fr));
  gap: 70px 78px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(380px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(380px, 1fr));
  }
`;

export default ProductList;
