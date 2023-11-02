import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
// // import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userType } from "../../atoms";

import Header from "./Header";
import Footer from "./Footer";

// export type UserType = string;

export const Layout = () => {
  // const location = useLocation();

  return (
    <Wrapper>
      <Header />
      <main>
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
