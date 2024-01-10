import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../atoms";
import { getCartAPI } from "../api/cartAPI";

import styled from "styled-components";
import Carousel from "../component/common/Carousel/Carousel";
import ProductList from "../component/common/Product/ProductList";
import CartItem from "../component/common/Cart/CartItem";

const Content = styled.div`
  max-width: 1280px;
  padding: 3.125rem 1.25rem;
  margin: 0 auto;
`;
const Container = styled.section`
  width: 100%;
  overflow-x: hidden;
`;

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const res = await getCartAPI();

        if (res) {
          setCartItems(res);
          localStorage.setItem("cart", JSON.stringify(res));
        }
      } catch (error) {
        console.error("장바구니 데이터 불러오기 실패", error);
      }
    };
    getCartData();
  }, []);

  return (
    <Container>
      <Carousel />
      <Content>
        <ProductList />
      </Content>
    </Container>
  );
};

export default Home;
