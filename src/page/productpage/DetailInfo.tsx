import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { CountButton } from "../../component/common/Button/CountButton";
import Button, { MyButton } from "../../component/common/Button/CommonButton";
import { detailProductAPI } from "../../api/productAPI";
import { postCartAPI } from "../../api/cartAPI";

import swal from "sweetalert";

// interface RouteParams {
//   id?: string | undefined;
// }

interface Product {
  product_id: number;
  product_name: string;
  image: string;
  price: number;
  store_name: string;
}
const baceImg =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnOSHZ%2FbtrLTB8V5DQ%2FnlaUCKg7kzbp7PbVKy63Qk%2Fimg.png";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(600px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(600px, 1fr));
  }
`;

const ProductImg = styled.img`
  max-width: 600px;
  height: 600px;
`;

const InfoSection = styled.section`
  width: 630px;
`;

const ProductInfoDiv = styled.div`
  margin-bottom: 138px;
  & p:first-child {
    color: var(--grey76);
    font-size: 18px;
    margin-bottom: 16px;
  }

  & h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  & strong {
    font-size: 36px;
    font-weight: 700;
  }
`;

const OrderDiv = styled.div`
  & p:first-of-type {
    font-size: 16px;
    color: var(--grey76);
    margin-bottom: 20px;
  }
`;

const TotalPriceDiv = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  font-size: 18px;
  font-weight: 500;

  & p {
    display: inline;
  }
`;

const PriceDiv = styled.div`
  & p:first-of-type {
    margin-bottom: 20px;
    font-size: 18px;
    & strong {
      color: var(--main-color);
      font-weight: 700;
    }
  }

  & p:first-of-type::after {
    content: " | ";
    color: var(--greyC4);
    margin: 0 11px;
  }

  & p:last-of-type {
    color: var(--main-color);
    & strong {
      font-size: 36px;
      font-weight: 700;
    }
  }
`;

const ButtonDiv = styled.button`
  margin-top: 40px;
  display: flex;
  gap: 14px;
  max-width: 100%;
`;
const CartBtn = styled(MyButton)`
  color: white;
`;

const DetailInfo: React.FC = () => {
  const params = useParams();
  console.log("params", typeof params.id);

  const [count, setCount] = useState(1);
  const handleCountChange = (value: number) => {
    setCount(value);
  };
  const productId = Number(params.id);

  const [product, setProduct] = useState<Product>();
  const navigate = useNavigate();

  // api연결
  useEffect(() => {
    const getProduct = async () => {
      const data = await detailProductAPI(params.id);
      if (data) {
        console.log("상품 api 연결 확인중: ", data);
        const { product_name, image, price, store_name } = data;
        console.log(
          "api통신한 현재 상품데이터: ",
          product_name,
          image,
          price,
          store_name
        );

        setProduct(data);
      }
    };

    getProduct();
  }, [params.id]);

  // console.log("데이터 확인중", product);

  const handleAddClick = async () => {
    console.log("추가 할 상품 이름: ", product?.product_name);
    console.log("추가 할 상품 금액: ", product?.price);
    console.log("추가 할 상품 수량: ", count);
    console.log("상품id: ", params.id);

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.includes(productId)) {
      swal({
        title: "상품확인",
        text: "이미 장바구니에 있는 상품입니다. 장바구니로 이동하시겠습니까?",
        icon: "warning",
        buttons: ["아니오", "예"],
        dangerMode: true,
      }).then((willGotoCart) => {
        if (willGotoCart) {
          navigate("/cart");
        }
      });
    } else {
      cart.push(productId);
      localStorage.setItem("cart", JSON.stringify(cart));

      try {
        const SendData = {
          product_id: productId,
          quantity: count,
          check: true,
        };
        console.log("보낼데이터", SendData);
        const res = await postCartAPI(SendData);
        console.log("api 통신 결과", res);
      } catch (error) {
        console.error("장바구니 api통신에 실패함", error);
      }
    }
  };

  return (
    <GridContainer>
      <ProductImg src={product?.image || baceImg} alt="상품이미지" />
      <InfoSection>
        <ProductInfoDiv>
          <p>{product?.store_name || "스토어 이름-백엔드글로벌"}</p>
          <h2>{product?.product_name || "딥러닝 개발자 무릎담요"}</h2>
          <p>
            <strong>{product?.price.toLocaleString() || "17,500"}</strong>원
          </p>
        </ProductInfoDiv>
        <OrderDiv>
          <p>택배배송/ 무료배송</p>
          <hr />
          <CountButton initialValue={1} onChange={handleCountChange} />
          <hr />

          <TotalPriceDiv>
            <div>총 상품 금액</div>
            <PriceDiv>
              <p>
                총 수량 <strong>{count}</strong>개
              </p>
              <p>
                <strong>
                  {(count * (product?.price || 0) || "29,300").toLocaleString()}
                </strong>
                원
              </p>
            </PriceDiv>
          </TotalPriceDiv>
          <ButtonDiv>
            <Button width="md" $bgColor="active">
              바로구매
            </Button>
            <CartBtn width="ms" $bgColor="dark" onClick={handleAddClick}>
              장바구니
            </CartBtn>
          </ButtonDiv>
        </OrderDiv>
      </InfoSection>
    </GridContainer>
  );
};
export default DetailInfo;
