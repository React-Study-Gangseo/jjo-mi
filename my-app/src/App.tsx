import React, { useEffect } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { userType } from "./atoms";
import { Layout } from "./component/layout/Layout";
import Home from "./page/Home";
import ProductList from "./component/common/Product/ProductList";
import ProductDetail from "./page/productpage/ProductDetail";
import { Login } from "./page/Login";
import { Join } from "./page/Join";
import ShoppingCart from "./page/ShoppingCart";

const App: React.FC = () => {
  // 타입과 토큰에따라 분리할때는 값을 가져와서해야함

  // const userType: string = useRecoilValue(userType);
  // const token: string | null = localStorage.getItem("token");

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RecoilRoot>
          {/* <main> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<ShoppingCart />} />

              <Route path="products" element={<ProductList />} />
              <Route path="products/:id" element={<ProductDetail />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Route>
          </Routes>
          {/* </main> */}
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
};

export default App;
