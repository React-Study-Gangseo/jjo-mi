import { Link } from "react-router-dom";
import styled from "styled-components";

import snsInsta from "../../assets/images/icon-insta.svg";
import snsFb from "../../assets/images/icon-fb.svg";
import snsYt from "../../assets/images/icon-yt.svg";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <LinkContainer>
        <FooterLinks aria-label="주요 페이지 링크">
          <FooterLinkList>
            <Link to="/" aria-label="회사 소개 페이지로 이동">
              호두샵 소개
            </Link>
            <Link to="/" aria-label="이용약관 페이지로 이동">
              이용약관
            </Link>
            <Link to="/" aria-label="개인정보처리방침 페이지로 이동">
              개인정보처리방침
            </Link>
            <Link to="/" aria-label="전자금융거래약관 페이지로 이동">
              전자금융거래약관
            </Link>
            <Link to="/" aria-label="청소년보호정책 페이지로 이동">
              청소년보호정책
            </Link>
            <Link to="/" aria-label="제휴문의 페이지로 이동">
              제휴문의
            </Link>
          </FooterLinkList>
        </FooterLinks>
        <SnsImgContainer>
          <a href="https://www.instagram.com/" target="_blank" rel="인스타그램">
            <img src={snsInsta} alt="sns-instagram" />
          </a>
          <a href="https://ko-kr.facebook.com/" target="_blank" rel="페이스북">
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
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  bottom: 0;
  background-color: #f2f2f2;
  font-size: 14px;
  margin: 0 auto;
  padding: ;
`;

const FooterContainer = styled.div`
  /* display: flex;
    justfy-content: space-between;
    flex-wrap: wrap; */
  /* max-width: 1280px;
  margin-bottom: 30px; */
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

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 28px;
  color: #000000;

  &:not(:last-child)::after {
    content: "|";
    margin-left: 14px;
  }
`;

const FooterLinkList = styled.div`
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
`;

const Line = styled.hr`
  width: 100%;
  margin: 30px auto;
`;

const CompanyInfo = styled.article`
  color: #767676;
  font-size: 14px;
  line-height: 24px;
`;

export default Footer;
