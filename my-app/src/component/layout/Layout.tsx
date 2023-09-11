import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../common/Carousel/Carousel";
// import ProductCard from "../common/Product/ProductCard";
import ProductList from "../common/Product/ProductList";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  /* overflow-x: hidden; */

  & main {
    width: 100vw;
    max-width: 100%;
    margin: 0 auto;
    min-height: min-height: calc(100% - 298px);
  }
`;

//------------------------- main

export default Layout;
