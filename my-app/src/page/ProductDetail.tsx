import React from "react";
import styled from "styled-components";

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
  }
`;

const ProjectDetail: React.FC = (): JSX.Element => {
  // const { id } = useParams<RouteParams>();
  // console.log("params", params, text);
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
            <input type="number" />
            <hr />
            <div>
              <h3>총 상품 금액</h3>
              <p> 총 수량 1개 | 17,500원</p>
            </div>
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
