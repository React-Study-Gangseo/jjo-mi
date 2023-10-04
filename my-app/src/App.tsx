import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./component/layout/Layout";
import Home from "./page/Home";
import ProductList from "./component/common/Product/ProductList";
import ProductDetail from "./page/productpage/ProductDetail";
import { Login } from "./page/Login";
import { Join } from "./page/Join";
import ShoppingCart from "./page/ShoppingCart";

const App: React.FC = () => {
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
        </RecoilRoot>

        {/* </main> */}
      </BrowserRouter>
    </>
  );
};

export default App;
