import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
// import { userTypeValue, isLoggedInState } from "../../atoms";
// import { userState } from "../../atoms";

// import { UserType } from "../Layout/Layout";

import logo from "../../assets/images/Logo-hodu.png";
import serchBtn from "../../assets/images/search.svg";
import iconCart from "../../assets/images/icon-shopping-cart.svg";
import iconCartActve from "../../assets/images/icon-shopping-cart-2.svg";
import iconUser from "../../assets/images/icon-user.svg";

type UserType = "SELLER" | "BUYER" | "GUEST";

const Header = () => {
  // 셀러 회원 전용만들면 고려
  // const userType = useRecoilValue(userTypeValue);
  const token = localStorage.getItem("token");

  const location = useLocation();

  console.log("헤더에서 토큰값 확인중", token);

  // const isLoggedIn = useRecoilValue<boolean>(!authToken);
  return (
    <HeaderDiv>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="홈으로 바로기" />
        </Link>
        <SearchContainer>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <button type="submit"></button>
        </SearchContainer>
      </LogoWrapper>
      <IconContainer>
        <IconWrapper>
          {location.pathname === "/cart" ? (
            <Link to="/cart">
              <img src={iconCartActve} alt="장바구니" />
              <p style={{ color: "#21BF48" }}>장바구니</p>
            </Link>
          ) : (
            <Link to="/cart">
              <img src={iconCart} alt="장바구니" />
              <p>장바구니</p>
            </Link>
          )}
        </IconWrapper>
        <IconWrapper>
          {token ? (
            <Link to="mypage">
              <img src={iconUser} alt="마이페이지" />
              <p>마이페이지</p>
            </Link>
          ) : (
            <Link to="/login">
              <img src={iconUser} alt="로그인" />
              <p>로그인</p>
            </Link>
          )}
        </IconWrapper>
      </IconContainer>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  box-shadow: 0 3px 5px rgba(183, 3, 3, 0.1);
  max-width: 1280px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  padding: 28px auto;

  & img {
    width: 124px;
    height: 38px;
  }
`;

const SearchContainer = styled.article`
  width: 400px;
  min-width: 200px;
  height: 46px;
  display: flex;
  align-items: center;
  border: 1px solid var(--main-color);
  border-radius: 30px;
  margin: auto 22px;

  & input {
    width: calc(100%- 60%);
    height: 30px;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
    border: none;
    padding: 9px 22px;

    &:focus {
      outline: none;
    }
  }

  & button {
    width: 28px;
    height: 28px;
    border: none;
    margin-left: 140px;
    /* padding: 9px; */
    background-image: url(${serchBtn});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 26px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;

  & p {
    font-size: 14px;
    color: var(--grey76);
  }

  & img {
    width: 32px;
    height: 32px;
  }
`;

export default Header;
