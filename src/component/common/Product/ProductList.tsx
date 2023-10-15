import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { productAPI } from "../../../api/productAPI";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProductList: React.FC = () => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<
    {
      product_id: number;
      product_name: string;
      image: string;
      price: number;
      store_name: string;
    }[]
  >([]);

  const infinityScroll = () => {
    productAPI(page)
      .then((data) => {
        setProducts([...products, ...data.results]);
        setPage((prev) => prev + 1);
        console.log("데이터확인중: ", products);
        console.log("페이지확인중: ", page);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (inView) {
      infinityScroll();
    }
  }, [inView]);

  return (
    <GridContainer>
      <h2 className="a11y-hidden">상품리스트</h2>
      {products.map((product) => (
        <Link key={product.product_id} to={`/products/${product.product_id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
      <div ref={ref}>Loading..</div> {/* 무한스크롤 마커 */}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px 78px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* gap: 70px 78px; */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    /* gap: 70px 78px; */
  }
`;

export default ProductList;
