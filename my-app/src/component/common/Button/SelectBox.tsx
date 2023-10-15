import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Icon_down from "../../../assets/images/icon-down-arrow.svg";
import Icon_up from "../../../assets/images/icon-up-arrow.svg";

type PhoneSelectProps = {
  isOpen: boolean;
  selectedPhone: string;
  handlePhoneNumberClick: (phoneNumber: string) => void;
  handlePhoneButtonClick: () => void;
};

const PhoneSelectWrapper = styled.article<PhoneSelectProps>`
  width: 100%;
  height: 54px;
  border: 1px solid var(--greyC4);
  border-radius: 10px;
  position: relative;

  display: flex;
  justify-content: center; // 가로 방향으로 가운데 정렬
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--main-color);
  }

  button {
    font-size: 16px;
  }

  > button {
    width: 100%;
    height: auto;

    background: url(${(props) => (props.isOpen ? Icon_up : Icon_down)}) center
      right 16px no-repeat;
  }

  ul {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    max-height: 150px;
    overflow-y: auto;
    background-color: white;
    position: absolute;
    width: 100%;
    top: 59px;
    left: 0;
    border: 1px solid var(--greyC4);
    border-radius: 10px;
    box-shadow: 0px, 2px, 5px rgba(0, 0, 0, 0.1);
  }

  ul li {
    height: 40px;
    padding: 10px;
    display: flex;
    justify-content: center; // 가로 방향으로 가운데 정렬
    align-items: center;
    &:hover,
    &:focus {
      background-color: var(--greyC4);
      border-radius: 10px;
    }
  }

  ul li button {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
  }
`;

export const PhoneSelect: React.FC<PhoneSelectProps> = ({
  selectedPhone,
  handlePhoneNumberClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 셀렉박스 외에 누르면 닫히는 기능
  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      // TypeScript 환경에서는 종종 타입 안정성을 위해 명시적인 형변환이 필요
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PhoneSelectWrapper
      ref={wrapperRef} // 레퍼런스 연결
      isOpen={isOpen}
      selectedPhone={selectedPhone}
      handlePhoneNumberClick={handlePhoneNumberClick}
      handlePhoneButtonClick={handleButtonClick}
    >
      <button onClick={handleButtonClick}>{selectedPhone}</button>
      <ul>
        {["010", "011", "016", "017", "018"].map((phoneNumber) => (
          <li key={phoneNumber}>
            <button
              type="button"
              onClick={() => handlePhoneNumberClick(phoneNumber)}
            >
              {phoneNumber}
            </button>
          </li>
        ))}
      </ul>
    </PhoneSelectWrapper>
  );
};
