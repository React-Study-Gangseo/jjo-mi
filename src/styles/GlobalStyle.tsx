import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	
	*{
    font-weight: 400;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /* height:100%; */
	}
body {
  padding-top: 5.625rem;
  /* margin: 0; */
}
  a {
      text-decoration: none;
      color: black;
    }

  ul, li {
    list-style-type: none;
   }

    button {
      border: none;
      cursor: pointer;
      background-color: transparent;
    }

    input {
      outline: none;
    }


  .a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

    :root {
    --main-color : #21BF48;
    --main-text-color : #333333;
    --grayE0 : #E0E0E0;
    --greyC4: #c4c4c4;
    --grey76 : #767676;
    --greyDB : #dbdbdb;
    --greyF2 : #f2f2f2;
    --red57 : #eb5757;
  }

`;

export default GlobalStyle;
