import { Link } from "react-router-dom";
import styled from "styled-components";

import snsInsta from "../../assets/images/icon-insta.svg";
import snsFb from "../../assets/images/icon-fb.svg";
import snsYt from "../../assets/images/icon-yt.svg";

const Footer: React.FC = () => {
  return (
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
          서울시 구로구 신도림
          <br />
          사업자 번호 : 000-0000-00000 | 통신판매업
          <br />
          대표: 정종미
        </CompanyInfo>
      </ContentWrapper>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100vw;
  background-color: #f2f2f2;
`;
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

export default Footer;
