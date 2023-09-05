import React from "react";
import axios from "axios";

export default function productAPI() {
  // 상품 정보 가져오기
  axios
    .get("https://openmarket.weniv.co.kr/products/")
    .then((Response) => {
      console.log(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
}
