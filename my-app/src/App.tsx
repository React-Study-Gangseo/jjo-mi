import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./page/Home";
import ProductList from "./component/common/Product/ProductList";
import ProductDetail from "./page/productpage/ProductDetail";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {/* <main> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
        {/* </main> */}
      </BrowserRouter>
    </>
  );
};

export default App;
