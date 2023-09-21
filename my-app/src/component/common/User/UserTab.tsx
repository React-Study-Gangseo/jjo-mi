import styled from "styled-components";

type UserTabProps = {
  tempUserType: string;
};

const UserTab = styled.div<UserTabProps>`
  width: 550px;
  position: relative;
  top: 150px;

  &::after {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 5px;
    height: 19px;
    left: 50%;
    top: 5px;
    transform: translateX(-50%);
    /* background-color: #ffffff; */
    z-index: 400;
  }

  > button {
    width: 50%;
    position: relative;
    padding: 20px 0 30px 0;
    border: 1px solid var(--greyC4);
    /* border-bottom: none; */
    border-radius: 10px 10px 0 0;
    color: black;
    font-size: 18px;
    font-weight: 700;
    transform: translate(0, -60px);
    background-color: #f2f2f2;
    cursor: pointer;
  }

  ${({ tempUserType }) =>
    tempUserType === "BUYER"
      ? `
    button: nth-child(1) {
      z-index: 100;
      background-color: #fff;
      border-bottom: none; 
        }
      `
      : `
    button: nth-child(2) {
      z-index: 100;
      background-color: #fff;
      border-bottom: none; 
      }
  `}
`;

export default UserTab;
