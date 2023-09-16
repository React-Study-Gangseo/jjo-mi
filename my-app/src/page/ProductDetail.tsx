import React, { useState } from "react";
import styled from "styled-components";
import { CountButton } from "../component/common/Button/countButton";

import { useParams } from "react-router-dom";

interface RouteParams {
  id: string;
}

const Content = styled.section`
  max-width: 1280px;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(600px, 1fr));
  gap: 50px;

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
  & p:first-child {
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
  & p:first-child {
    margin-bottom: 20px;
    font-size: 18px;
    & strong {
      color: var(--main-color);
      font-weight: 700;
    }
  }

  & p:first-child::after {
    content: " | ";
    color: var(--greyC4);
    margin: 0 11px;
  }

  & p:last-child {
    color: var(--main-color);
    & strong {
      font-size: 36px;
      font-weight: 700;
    }
  }
`;

const ProjectDetail: React.FC = () => {
  // const { id } = useParams<RouteParams>();
  // console.log("params", params, text);
  const [count, setCount] = useState(1);
  const handleCountChange = (value: number) => {
    setCount(value);
  };
  return (
    <Content>
      <h1>상품 상세 페이지</h1>
      <GridContainer>
        <ProductImg
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfvHA964QpCQ2NlY6ZeHY01IMmKR-JoM6yA&usqp=CAU"
          alt="상품이미지"
        />
        <InfoSection>
          <ProductInfoDiv>
            <p>스토어 이름-백엔드글로벌</p>
            <h2>딥러닝 개발자 무릎담요</h2>
            <p>
              <strong>17,500</strong>원
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
                  <strong>17,500</strong>원
                </p>
              </PriceDiv>
            </TotalPriceDiv>

            <div>
              <button>바로구매</button>
              <button>장바구니</button>
            </div>
          </OrderDiv>
        </InfoSection>
      </GridContainer>
      <p>text</p>
    </Content>
  );
};
export default ProjectDetail;
