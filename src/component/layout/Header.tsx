import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/Logo-hodu.png";
import serchBtn from "../../assets/images/search.svg";
import iconCart from "../../assets/images/icon-shopping-cart.svg";
import iconCartActve from "../../assets/images/icon-shopping-cart-2.svg";
import iconUser from "../../assets/images/icon-user.svg";

type UserType = "SELLER" | "BUYER" | "GUEST";

const Header = () => {
  const token = localStorage.getItem("token");

  const location = useLocation();

  console.log("헤더에서 토큰값 확인중", token);

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
  /* box-shadow: 0 3px 5px rgba(183, 3, 3, 0.1); */
  max-width: 80rem;
  height: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 33.375rem;
  padding: 28px auto;

  & img {
    width: 7.75rem;
    height: 2.375rem;
  }
`;

const SearchContainer = styled.article`
  width: 100%;
  min-width: 12.5rem;
  display: flex;
  align-items: center;
  border: 1px solid var(--main-color);
  border-radius: 1.875rem;
  margin: auto 1.375rem;
  padding: 0.5625rem 0.75rem;

  & input {
    flex-grow: 1;
    height: 1.875rem;
    background-color: transparent;
    font-size: 1rem;
    border: none;
    padding: 0.5625rem 1.375rem;

    &:focus {
      outline: none;
    }
  }

  & button {
    width: 1.75rem;
    height: 1.75rem;
    border: none;
    background-image: url(${serchBtn});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1.625rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;

  & p {
    font-size: 0.875rem;
    color: var(--grey76);
  }

  & img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Header;
