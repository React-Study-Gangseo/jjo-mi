import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../atoms";
import { getCartAPI } from "../api/cartAPI";

import styled from "styled-components";
import Carousel from "../component/common/Carousel/Carousel";
import ProductList from "../component/common/Product/ProductList";
import CartItem from "../component/common/Cart/CartItem";

const Content = styled.section`
  max-width: 1280px;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const res = await getCartAPI();

        if (res) {
          setCartItems(res);
          res.forEach((item: any) => {
            localStorage.setItem(
              `cart_item-${item.cart_item_id}`,
              JSON.stringify(item)
            );
          });
        }
      } catch (error) {
        console.error("장바구니 데이터 불러오기 실패", error);
      }
    };
    getCartData();
  }, []);

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
