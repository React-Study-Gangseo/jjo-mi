// 나중에 다크모드 하고싶으면 해보기

import { DefaultTheme } from "styled-components"; // ✨ 1

export const darkTheme: DefaultTheme = {
  // ✨ 1
  bgColor: "#353b48",
  textColor: "black",
  accentColor: "#487eb0",
};
export const lightTheme: DefaultTheme = {
  // ✨ 1
  bgColor: "#f5f6fa",
  textColor: "#353b48",
  accentColor: "#487eb0",
};
