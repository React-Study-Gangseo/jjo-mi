import React, { useEffect } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Outlet />
      main
      <Footer />
    </>
  );
};

// const LayoutContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const Header = styled

export default Layout;
