import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CountButton } from "../../component/common/Button/CountButton";
import Button, { MyButton } from "../../component/common/Button/CommonButton";
import productAPI from "../../api/productAPI";

interface RouteParams {
  id?: string | undefined;
}

interface Product {
  product_id: number;
  product_name: string;
  image: string;
  price: number;
  store_name: string;
}

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
const TestBtn = styled(MyButton)`
  color: white;
`;

const DetailInfo: React.FC = () => {
  const params = useParams();
  console.log("params", params.id);

  const [count, setCount] = useState(1);
  const handleCountChange = (value: number) => {
    setCount(value);
  };

  const [product, setProduct] = useState<Product>();

  // api연결
  useEffect(() => {
    const getProduct = async () => {
      const data = await productAPI();
      console.log("이건?");
      if (data && data.results) {
        console.log("상품 api 연결 확인중: ", data);
        console.log("세부상품 확인중", data.results);

        const { results } = data;
        const currentProductInfo = results.find(
          (product: Product) =>
            product.product_id === parseInt(params.id ? params.id : "0")
        );

        const { product_name, image, price, store_name } = currentProductInfo;
        console.log(
          "api통신한 현재 상품데이터: ",
          product_name,
          image,
          price,
          store_name
        );

        setProduct(currentProductInfo);
      }
    };

    getProduct();
  }, [params.id]);

  console.log("데이터 확인중", product);
  return (
    <GridContainer>
      <ProductImg
        src={
          product?.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfvHA964QpCQ2NlY6ZeHY01IMmKR-JoM6yA&usqp=CAU"
        }
        alt="상품이미지"
      />
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
            <Button width="md" bgColor="active">
              바로구매
            </Button>
            <TestBtn width="ms" bgColor="dark">
              장바구니
            </TestBtn>
          </ButtonDiv>
        </OrderDiv>
      </InfoSection>
    </GridContainer>
  );
};
export default DetailInfo;
