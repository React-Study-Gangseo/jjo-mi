import React from "react";
import axios from "axios";

export default async function productAPI() {
  // 상품 정보 가져오기
  try {
    const response = await axios.get(
      "https://openmarket.weniv.co.kr/products/"
    );
    return response.data;
  } catch (error) {
    console.log(Error);
    return null;
  }
}
