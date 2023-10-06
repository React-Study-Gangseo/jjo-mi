import { instance } from "./axios-api";

export const productAPI = async (params: string | number) => {
  // 상품 정보 가져오기
  try {
    const response = await instance.get(`products/?page=${params}`);
    return response.data;
  } catch (error) {
    console.log(Error);
    return null;
  }
};

export const productDetailAPI = async (productId: string | number) => {
  try {
    const res = await instance.get(`products/${productId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const detailProductAPI = async (id: string | undefined) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};
