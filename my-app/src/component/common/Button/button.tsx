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

// const QuantityCheckbox: React.FC = () => {
//   return (
//     <CountWrap>
//       <button type="button">-</button>
//       <input type="text" value="1"></input>
//       <button type="button">+-</button>
//     </CountWrap>
//   );
// };

// const CountWrap = styled.section`
//   position: relative;
//   padding: 0 38px;
//   border: 1px solid #ddd;
//   overflow: hidden;
//   width: 50px;

//   & button {
//     border: 0;
//     background: #ddd;
//     color: #000;
//     width: 38px;
//     height: 38px;
//     position: absolute;
//     top: 0;
//     font-size: 12px;
//   }

//   & button:first-child {
//     left: 0;
//   }

//   & button:last-child {
//     right: 0;
//   }

//   & input {
//     border: 0;
//     height: 38px;
//     text-align: center;
//     display: block;
//     width: 100%;
//   }
// `;

// const StyledButton = styled.button`
//     background-color: #228be6;
//     color: #ffffff;
//     border: none;
//     border-radius: 5px;
//     padding: 12px 24px;
//     margin: 0;
// `;

export default { CommonButton };
