import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import productAPI from "../../../api/productAPI";
import { Link } from "react-router-dom";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<
    {
      product_id: number;
      product_name: string;
      image: string;
      price: number;
      store_name: string;
    }[]
  >([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await productAPI();
      if (data && data.results) {
        console.log("상품 api 연결 확인중: ", data);
        console.log("세부상품 api 연결 확인중: ", data.results);
        // console.log("data type: ", typeof data);
        setProducts(data.results);
      }
    };

    getProducts();
  }, []);

  return (
    <GridContainer>
      {products.map((product) => (
        <Link key={product.product_id} to={`/products/${product.product_id}`}>
          <ProductCard product={product} />
        </Link>
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
