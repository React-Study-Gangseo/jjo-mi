import React, { useState } from "react";
import styled from "styled-components";
import iconMinus from "../../../assets/images/icon-minus-line.svg";
import iconPlus from "../../../assets/images/icon-plus-line.svg";

const CountWrap = styled.table`
  width: 150px;
  height: 50px;
  border-spacing: 0;
  margin: 30px 0;

  & tr,
  td {
    width: 50px;
    border: 1px solid var(--greyC4);
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;
  }
`;

const BaseButton = styled.button<{ bgImage: string }>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.bgImage});
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
            <BaseButton
              type="button"
              onClick={handleDecrease}
              bgImage={iconMinus}
            />
          </td>
          <td>{count}</td>
          <td>
            <BaseButton
              type="button"
              onClick={handleIncrease}
              bgImage={iconPlus}
            />
          </td>
        </tr>
      </tbody>
    </CountWrap>
  );
};
