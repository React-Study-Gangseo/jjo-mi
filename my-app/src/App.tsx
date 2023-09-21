import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./component/layout/Layout";
import Home from "./page/Home";
import ProductList from "./component/common/Product/ProductList";
import ProductDetail from "./page/productpage/ProductDetail";
import { Login } from "./page/Login";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RecoilRoot>
          {/* <main> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
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
