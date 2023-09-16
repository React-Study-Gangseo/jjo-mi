import React, { useState } from "react";
import styled from "styled-components";
import iconMinus from "../../../assets/images/icon-minus-line.svg";
import iconPlus from "../../../assets/images/icon-plus-line.svg";

const CountWrap = styled.table`
  border-spacing: 0;
  /* border-radius: 5px; */
  /* overflow: hidden; */
  margin: 30px 0;

  & tr,
  td {
    border: 1px solid var(--greyC4);
    border-radius: 5px;
    text-align: center;
    width: 50px;
    height: 50px;
  }
`;

const BaseButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
`;

const MinusBtn = styled(BaseButton)`
  background-image: url(${iconMinus});
`;

const PlusBtn = styled(BaseButton)`
  background-image: url(${iconPlus});
`;

interface CountButtonProps {
  initialValue: number;
  onChange: (value: number) => void;
}

export const CountButton: React.FC<CountButtonProps> = ({
  initialValue,
  onChange,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <CountWrap>
      <tbody>
        <tr>
          <td>
            <MinusBtn type="button" onClick={handleDecrease}></MinusBtn>
          </td>
          <td>{count}</td>
          <td>
            <PlusBtn type="button" onClick={handleIncrease}></PlusBtn>
          </td>
        </tr>
      </tbody>
    </CountWrap>
  );
};
