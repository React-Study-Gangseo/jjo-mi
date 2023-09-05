import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../common/Carousel/Carousel";
// import Header from "./Header";
// import Footer from "./Footer";
import logo from "../../assets/images/Logo-hodu.png";
import serchBtn from "../../assets/images/search.svg";
import iconCart from "../../assets/images/icon-shopping-cart.svg";
import iconUser from "../../assets/images/icon-user.svg";

import snsInsta from "../../assets/images/icon-insta.svg";
import snsFb from "../../assets/images/icon-fb.svg";
import snsYt from "../../assets/images/icon-yt.svg";

const Layout = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <header>
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
              <img src={iconCart} alt="장바구니" />
              장바구니
            </IconWrapper>
            <IconWrapper>
              <img src={iconUser} alt="마이페이지" />
              마이페이지
            </IconWrapper>
          </IconContainer>
        </header>
        <main>
          <Carousel />
          <Content>
            <h2> 상품 1</h2>
          </Content>
        </main>
        <footer>
          <ContentWrapper>
            <LinkContainer>
              <FooterLinks aria-label="주요 페이지 링크">
                <li>
                  <Link to="/" aria-label="회사 소개 페이지로 이동">
                    호두샵 소개
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="이용약관 페이지로 이동">
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="개인정보처리방침 페이지로 이동">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="전자금융거래약관 페이지로 이동">
                    전자금융거래약관
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="청소년보호정책 페이지로 이동">
                    청소년보호정책
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="제휴문의 페이지로 이동">
                    제휴문의
                  </Link>
                </li>
              </FooterLinks>
              <SnsImgContainer>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="인스타그램"
                >
                  <img src={snsInsta} alt="sns-instagram" />
                </a>
                <a
                  href="https://ko-kr.facebook.com/"
                  target="_blank"
                  rel="페이스북"
                >
                  <img src={snsFb} alt="sns-facebook" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="유튜브">
                  <img src={snsYt} alt="sns-youtube" />
                </a>
              </SnsImgContainer>
            </LinkContainer>
            <Line />
            <CompanyInfo>
              <strong>(주)HODU SHOP</strong>
              <br />
              서울시 구로구 신도림
              <br />
              사업자 번호 : 000-0000-00000 | 통신판매업
              <br />
              대표: 정종미
            </CompanyInfo>
          </ContentWrapper>
        </footer>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  overflow-x: hidden;
`;

const InnerWrapper = styled.section`
  /* max-width: 1280px; */
  /* margin: 0 auto; */

  & header {
    box-shadow: 0 3px 5px rgba(183, 3, 3, 0.1);
    max-width: 1280px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
margin: 0 auto
  }

  & main {
    /* max-width: 1280px;  */
    width: 100vw;
    margin: 0 auto;
    min-height: min-height: calc(100vh - 298px);
  }

  & footer {
    width: 100vw;
    /* height: auto; */
    background-color: #f2f2f2;
    /* transform: translateX(-10%); */
    /* padding: 30px; */
  }
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
  font-size: 14px;
  color: var(--grey76);

  & img {
    width: 32px;
    height: 32px;
  }
`;

//------------------------- main

const Content = styled.section`
  max-width: 1280px;
  height: 790px;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;

//------------------------- footer
const ContentWrapper = styled.section`
  max-width: 1250px;
  margin: 0 auto;
  padding-top: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SnsImgContainer = styled.article`
  display: flex;
  gap: 14px;
`;

const FooterLinks = styled.ul`
  color: #000000;

  & > li {
    display: inline-block;
    margin-right: 14px;

    &:last-child {
      margin-right: 0;
    }

    &:not(:last-child)::after {
      content: "|";
      margin-left: 14px;
    }

    & > a {
      text-decoration: none;
      color: #333333;
      &:hover {
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

const Line = styled.hr`
  width: 100%;
  margin: 30px auto;
`;

const CompanyInfo = styled.section`
  color: #767676;
  font-size: 14px;
  line-height: 24px;
`;

export default Layout;
