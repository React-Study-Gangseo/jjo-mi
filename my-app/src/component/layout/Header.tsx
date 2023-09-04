import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo-hodu.png";
import serchBtn from "../../assets/images/search.svg";
import iconCart from "../../assets/images/icon-shopping-cart.svg";
import iconUser from "../../assets/images/icon-user.svg";

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <LogoWrapper>
          <Link to="/">
            <Logo src={logo} alt="홈으로 바로기" />
          </Link>
          <SearchContainer>
            <SearchInput type="text" placeholder="검색어를 입력해주세요" />
            <SearchButton></SearchButton>
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
      </HeaderContainer>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(183, 3, 3, 0.1);
  z-index: 20;
`;

const HeaderContainer = styled.div`
  /* width: 1280px;
  margin: auto 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  padding: 28px auto;
`;

const Logo = styled.img`
  width: 124px;
  height: 38px;
`;
const SearchContainer = styled.article`
  width: 400px;
  min-width: 200px;
  max-width: 400px;
  height: 46px;
  display: flex;
  align-items: center;
  border: 1px solid var(--main-color);
  border-radius: 30px;
  margin: auto 22px;
`;

const SearchInput = styled.input`
  width: calc(100%- 60%);
  height: 30px;
  background-color: transparent;
  /* left: 22px; */
  font-size: 16px;
  /* padding: 5px; */
  border: none;
  padding: 9px 22px;
  /* margin-left : 22px */

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  padding: 9px auto;
  /* background-color: transparent; */
  /* cursor: pointer; */
  /* align-items: center; */
  background-image: url(${serchBtn});
  background-repeat: no-repeat;
  background-position: center;
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

export default Header;
