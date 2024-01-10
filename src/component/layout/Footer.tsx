import { Link } from "react-router-dom";
import styled from "styled-components";

import snsInsta from "../../assets/images/icon-insta.svg";
import snsFb from "../../assets/images/icon-fb.svg";
import snsYt from "../../assets/images/icon-yt.svg";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterDiv>
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
            서울시 강남구
            <br />
            사업자 번호 : 000-0000-00000 | 통신판매업
            <br />
            대표: 정종미
          </CompanyInfo>
        </ContentWrapper>
      </FooterDiv>
    </Container>
  );
};
const Container = styled.footer`
  width: 100vw;
  background-color: var(--greyF2);
`;

const FooterDiv = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.25rem;
`;
const ContentWrapper = styled.section`
  max-width: 78.125rem;
  margin: 0 auto;
  padding-top: 1.875rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SnsImgContainer = styled.article`
  display: flex;
  gap: 0.875rem;
`;

const FooterLinks = styled.ul`
  color: #000000;

  & > li {
    display: inline-block;
    margin-right: 0.875rem;

    &:last-child {
      margin-right: 0;
    }

    &:not(:last-child)::after {
      content: "|";
      margin-left: 0.875rem;
    }

    & > a {
      text-decoration: none;
      color: var(--main-text-color);
      &:hover {
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

const Line = styled.hr`
  width: 100%;
  margin: 1.875rem auto;
`;

const CompanyInfo = styled.section`
  color: var(--grey76);
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export default Footer;
