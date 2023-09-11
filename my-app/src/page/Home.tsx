import React from "react";
import styled from "styled-components";

import Layout from "../component/layout/Layout";
import Carousel from "../component/common/Carousel/Carousel";
import ProductList from "../component/common/Product/ProductList";

const Content = styled.section`
  max-width: 1280px;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <Content>
        <ProductList />
      </Content>
    </>
  );
};

export default Home;
