import React from "react";
import axios from "axios";

const BASE_URL = "https://openmarket.weniv.co.kr/";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const productAPI = async (params: string | number) => {
  // 상품 정보 가져오기
  try {
    const response = await axios.get(`products/?page=${params}`);
    return response.data;
  } catch (error) {
    console.log(Error);
    return null;
  }
};

export const detailProductAPI = async (id: string | undefined) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};
