import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../api/userAPI";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { userType } from "../atoms";

import styled from "styled-components";
import Button from "../component/common/Button/CommonButton";
import UserTab from "../component/common/User/UserTab";
import Logo_Hodu from "../assets/images/Logo-hodu.png";

type LoginState = {
  username: string;
  password: string;
  login_type: string;
};

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
    height: 60px;
    padding: 0 5px;
    size: 16px;
    border: none;
    border-bottom: 1px solid var(--greyC4);

    ::placeholder {
      color: var(--grey76);
    }
    :hover {
      border-bottmo: 1px solid var(--main-color);
    }
  }
`;

const IdInput = styled.input`
  margin-bottom: 6px;
  position: relative;
  z-index: 1;
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

const Error = styled.div`
  color: red;
  margin: 20px 2px;
`;

export const Login: React.FC = () => {
  const [tempUserType, setTempUserType] = useState("BUYER");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const setUserType = useSetRecoilState(userType);

  const handleUserType: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const userType = e.currentTarget.id === "BUYER" ? "BUYER" : "SELLER";
    setTempUserType(userType);

    setFormState((prev) => ({ ...prev, login_type: userType }));
  };

  const [formState, setFormState] = useState<LoginState>({
    username: "",
    password: "",
    login_type: tempUserType,
  });

  console.log("formSate", formState.username);
  // 에러메세지
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setError(null); // input 값이 변경될 때마다 에러 메시지 초기화
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("폼스테이트 값: ", formState);
    try {
      // input 입력상황에 따른 에러메세지
      if (formState.username && !formState.password) {
        setError("비밀번호를 입력해주세요.");
        return;
      } else if (!formState.username && formState.password) {
        setError("아이디를 입력해주세요.");
        return;
      } else if (!formState.username && !formState.password) {
        setError("아이디와 비밀번호 모두 입력해주세요.");
        return;
      }

      const loginData = await postUserLogin(formState);

      localStorage.setItem("token", loginData.token);
      // localStorage.setItem("username", loginData.username);
      setUserType(tempUserType === "BUYER" ? "BUYER" : "SELLER");

      // localStorage.setItem("userType", loginData.user_type);

      console.log("로그인 정보: ", loginData);
      navigate("/");
    } catch (error) {
      console.error("로그인 에러: ", error);
      setError("아이디 또는 패스워드가 일치하지 않습니다.");

      // alert("아이디 또는 패스워드가 일치하지 않습니다. 다시 한번 입력해주세요.");
    }
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
        <UserTab $tempUserType={tempUserType}>
          <button type="button" id="BUYER" onClick={handleUserType}>
            구매회원 로그인
          </button>
          <button type="button" id="SELLER" onClick={handleUserType}>
            판매회원 로그인
          </button>
        </UserTab>
        <LoginForm onSubmit={handleSubmit}>
          <IdInput
            type="text"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
            placeholder="아이디"
          />
          <PasswordInput
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            placeholder="비밀번호"
          />
          {error && <Error>{error}</Error>}
          <BtnDiv>
            <Button
              width="md"
              $bgColor={
                !formState.username || !formState.password
                  ? "inactive"
                  : "active"
              }
              type="submit"
            >
              로그인
            </Button>
          </BtnDiv>
        </LoginForm>
        <JoinTextDiv>
          <Link to={"/join"}>회원가입</Link>
          <p>|</p>
          <Link to={"/"}>비밀번호찾기</Link>
        </JoinTextDiv>
      </LoginContainer>
    </Wrapper>
  );
};
