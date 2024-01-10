import React from "react";

import styled from "styled-components";
import { PaymentType } from "../../../interface/types";

const TotalPriceBox = styled.section`
  width: 100%;
  padding: 45px 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: var(--greyF2);
  border-radius: 10px;
  margin-top: 80px;

  & div {
    text-align: center;
    line-height: 35px;
    & span {
      margin-top: 10px;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

const PaySpan = styled.p`
  color: var(--red57);

  & strong {
    font-size: 36px;
    font-weight: 700;
  }
`;

export default function TotalPrice({ payment }: PaymentType) {
  return (
    <TotalPriceBox>
      <div>
        <p>총 상품금액</p>
        <p>
          <span>{payment.totalPrice.toLocaleString()}</span>원
        </p>
      </div>
      <div>
        <p>상품할인</p>
        <p>
          <span>0</span>원
        </p>
      </div>
      <div>
        <p>배송비</p>
        <p>
          <span>{payment.totalShipping_fee.toLocaleString()}</span>원
        </p>
      </div>
      <div>
        <p>결제예정금액</p>
        <PaySpan>
          <strong>
            {(payment.totalPrice + payment.totalShipping_fee).toLocaleString()}
          </strong>
          원
        </PaySpan>
      </div>
    </TotalPriceBox>
  );
}
