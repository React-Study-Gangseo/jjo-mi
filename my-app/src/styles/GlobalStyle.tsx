import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}
	
	*{
      font-weight: 400;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
	}

  a {
        text-decoration: none;
    }

    button {
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    :root {
    --main-color : #21BF48;
    --main-text-color : #333333;
    --greyC4: #c4c4c4;
    --grey76 : #767676;
    --greyDB : #dbdbdb;
    --greyF2 : #f2f2f2;
  }

`

export default GlobalStyle;