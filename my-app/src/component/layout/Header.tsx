import logo from '../../assets/images/Logo-hodu.png';
import btn from '../../assets/images/search.svg';
import styled from "styled-components";


const Header = () => {
    return (
            <HeaderContainer>
                <Logo src={logo} alt="hodu로고" />
                <SearchContainer>
                    <SearchInput type="text" placeholder='검색어를 입력해주세요' />
                    <button><img src={btn} alt="검색하기" /></button>
                </SearchContainer>
            </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 124px;
  heigh: 38px;
`;
const SearchContainer = styled.article`
  whidth: 400px;
  heigh: 46px
  display: flex;
  align-items: center;
  border: 1px solid #21BF48;
  border-radius: 30px;
  `;

const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  left: 22px;
  font-size: 16px;
  padding: 5px;
  border: none;
  margin-right: 22px;
  /* margin-left : 22px */

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;



export default Header;