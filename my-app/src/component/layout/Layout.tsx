import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../common/Carousel/Carousel";
import ProductCard from "../common/Product/ProductCard";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Carousel />
        <Content>
          <ProductCard />
        </Content>
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  overflow-x: hidden;

  & main {
    width: 100vw;
    margin: 0 auto;
    min-height: min-height: calc(100vh - 298px);
  }
`;

//------------------------- main

const Content = styled.section`
  max-width: 1280px;
  height: 790px;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;

export default Layout;
