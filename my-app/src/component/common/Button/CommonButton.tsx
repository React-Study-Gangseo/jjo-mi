// StyledButton.tsx
import React, { Children, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  width?: "s" | "ms" | "md" | "lg";
  bgColor?: "active" | "inactive" | "dark";
  border?: "active" | "none";
  children?: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MyButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.bgColor === "active"
      ? "var(--main-color)"
      : props.bgColor === "dark"
      ? "var(--grey76)"
      : props.bgColor === "inactive"
      ? "var(--greyC4)"
      : "#FFF"};
  width: ${(props) =>
    props.width === "s"
      ? "80px"
      : props.width === "ms"
      ? "166px"
      : props.width === "md"
      ? "480px"
      : "220px"};
  height: 60px;
  font-size: 24px;
  color: white;
  border-radius: 5px;
`;

const Button: React.FC<ButtonProps> = ({
  width,
  bgColor,
  type,
  disabled,
  onClick,
  children,
}) => {
  return (
    <MyButton
      width={width}
      bgColor={bgColor}
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </MyButton>
  );
};

export default Button;
