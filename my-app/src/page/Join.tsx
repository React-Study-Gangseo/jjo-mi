import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/common/Button/CommonButton";
import { SignUpForm } from "../component/common/User/UserSignUp";
import UserTab from "../component/common/User/UserTab";

import Logo_Hodu from "../assets/images/Logo-hodu.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LogoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.article`
  width: 550px;
  min-height: 292px;
  margin: 0 auto;
`;

const IdInput = styled.input`
  margin-bottom: 6px;
`;

const PasswordInput = styled.input``;

const BtnDiv = styled.div`
  margin-top: 36px;
`;

export const Join: React.FC = () => {
  const [tempUserType, setTempUserType] = useState("BUYER");

  const handleUserType: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.id === "BUYER"
      ? setTempUserType("BUYER")
      : setTempUserType("SELLER");
  };

  return (
    <Wrapper>
      <LogoContainer>
        <h2 className="a11y-hidden ">회원가입 페이지</h2>
        <Link to={"/"}>
          <img src={Logo_Hodu} alt="호두마켓로고" />
        </Link>
      </LogoContainer>
      <LoginContainer>
        <UserTab tempUserType={tempUserType}>
          <button type="button" id="BUYER" onClick={handleUserType}>
            구매회원가입
          </button>
          <button type="button" id="SELLER" onClick={handleUserType}>
            판매회원가입
          </button>
        </UserTab>

        {/* <FormWrapper> */}
        <SignUpForm tempUserType={tempUserType} />
        {/* </FormWrapper> */}
      </LoginContainer>
    </Wrapper>
  );
};
