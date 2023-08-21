import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    background-color: #F2F2F2;
    padding: 20px;
    font-size: 14px
`;

const FooterContainer = styled.div`
    /* display: flex;
    justfy-content: space-between;
    flex-wrap: wrap; */
    max-width: 1200px;
    margin: 30px auto;
`;

const FooterLinks = styled.nav`
  display: flex;
`;

const FooterLink = styled.a`
    color: #000000;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
        text-decoration: none;
        font-weight: bold;
    }

    &:not(:last-child)::after {
        content: '|';
        margin-left: 14px;
    }
`;

const line = styled.hr`
    width: 100%;
    margin: 20px 0;   
    
    
`;

const CompanyInfo = styled.article`
    color:#767676;
    font-size: 14px;
`;

const Footer: React.FC =() => {
    return(
        <StyledFooter>
            <FooterContainer>
                <FooterLinks aria-label="주요 페이지 링크">
                    <FooterLink href="/about" aria-label="회사 소개 페이지로 이동">호두샵 소개</FooterLink>
                    <FooterLink href="/about" aria-label="이용약관 페이지로 이동">이용약관</FooterLink>
                    <FooterLink href="/about" aria-label="개인정보처리방침 페이지로 이동">개인정보처리방침</FooterLink>
                    <FooterLink href="/about" aria-label="전자금융거래약관 페이지로 이동">전자금융거래약관</FooterLink>
                    <FooterLink href="/about" aria-label="청소년보호정책 페이지로 이동">청소년보호정책</FooterLink>
                    <FooterLink href="/about" aria-label="제휴문의 페이지로 이동">제휴문의</FooterLink>
                </FooterLinks>
                <hr />
                <CompanyInfo>
                    <strong>(주)HODU SHOP</strong><br/>
                    서울시 구로구 신도림<br/>
                    사업자 번호 : 000-0000-00000 | 통신판매업<br/>
                    대표: 정종미
                </CompanyInfo>
            </FooterContainer>
        </StyledFooter>
    )
}



export default Footer