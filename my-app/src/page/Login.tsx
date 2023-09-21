import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/common/Button/CommonButton";
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
const LoginForm = styled.form`
  width: 100%;
  /* height: 352px; */
  padding: 35px;
  border: 1px solid var(--greyC4);
  border-radius: 10px;
  margin-top: 70px;

  & input {
    width: 100%;
    height: 40px;
    color: var(--grey76);
    border: none;
    border-bottom: 1px solid var(--greyC4);
  }
`;

const IdInput = styled.input`
  margin-bottom: 6px;
`;

const PasswordInput = styled.input``;

const BtnDiv = styled.div`
  margin-top: 36px;
`;

const JoinTextDiv = styled.div`
  width: 100%;
  color: var(--greyC4);
  display: flex;
  gap: 14px;
  justify-content: center;
  padding-top: 30px;
  text-align: center;
`;

export const Login: React.FC = () => {
  const [tempUserType, setTempUserType] = useState("BUYER");

  const handleUserType: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.id === "BUYER"
      ? setTempUserType("BUYER")
      : setTempUserType("SELLER");
  };

  return (
    <Wrapper>
      <LogoContainer>
        <h2 className="a11y-hidden ">로그인 페이지</h2>
        <Link to={"/"}>
          <img src={Logo_Hodu} alt="호두마켓로고" />
        </Link>
      </LogoContainer>
      <LoginContainer>
        <UserTab tempUserType={tempUserType}>
          <button type="button" id="BUYER" onClick={handleUserType}>
            구매회원 로그인
          </button>
          <button type="button" id="SELLER" onClick={handleUserType}>
            판매회원 로그인
          </button>
        </UserTab>
        <LoginForm>
          <IdInput type="text" placeholder="아이디" />
          <PasswordInput type="password" placeholder="비밀번호" />
          <BtnDiv>
            <Button width="md" bgColor="active">
              로그인
            </Button>
          </BtnDiv>
        </LoginForm>
        <JoinTextDiv>
          <Link to={"/"}>회원가입</Link>
          <p>|</p>
          <Link to={"/"}>비밀번호찾기</Link>
        </JoinTextDiv>
      </LoginContainer>
    </Wrapper>
  );
};
