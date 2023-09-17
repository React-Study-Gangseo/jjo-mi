import React, { useState } from "react";
import styled from "styled-components";
import { CountButton } from "../../component/common/Button/CountButton";
import Button, { MyButton } from "../../component/common/Button/CommonButton";

interface RouteParams {
  id: string;
}

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
`;
const TestBtn = styled(MyButton)`
  background-color: black;
  color: white;
`;

const DetailInfo: React.FC = () => {
  // const { id } = useParams<RouteParams>();
  // console.log("params", params, text);

  const [count, setCount] = useState(1);
  const handleCountChange = (value: number) => {
    setCount(value);
  };
  return (
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
                <strong>{count * 17500}</strong>원
              </p>
            </PriceDiv>
          </TotalPriceDiv>
          <ButtonDiv>
            <Button width="md" bgColor="active">
              바로구매
            </Button>
            <TestBtn width="s">test</TestBtn>
            {/* <CommonButton
              children={"바로구매"}
              styleProps={{
                size: "sm",
              }}
            />
            <CommonButton
              children={"장바구니"}
              size= "ms"
              bgcolor= ""
              styleProps={{ size: "sm", buttonColor: "dark" }}
            /> */}
          </ButtonDiv>
        </OrderDiv>
      </InfoSection>
    </GridContainer>
  );
};
export default DetailInfo;
