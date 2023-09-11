// StyledButton.tsx
import styled from "styled-components";

const StyledButton = styled.button<{ primary?: boolean }>`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
`;

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CommonButton: React.FC<ButtonProps> = ({
  primary = false,
  onClick,
  children,
}) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

// const StyledButton = styled.button`
//     background-color: #228be6;
//     color: #ffffff;
//     border: none;
//     border-radius: 5px;
//     padding: 12px 24px;
//     margin: 0;
// `;

export default CommonButton;
