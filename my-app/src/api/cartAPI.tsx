import { accessInstance } from "./axios-api";
import { productDetailAPI } from "./productAPI";

export const postCartAPI = async (productData: {}) => {
  // 장바구니 물건 넣기
  console.log("넘어온값 확인중", productData);
  const res = await accessInstance.post(`/cart/`, productData);
  return res.data;
};

export const getCartAPI = async () => {
  try {
    const cartData = (await accessInstance.get("/cart")).data.results;
    console.log("api들어와서 확인중", cartData);

    const productPromises = cartData.map((item: any) =>
      productDetailAPI(item.product_id)
    );

    // api 동시작업을 위한 비동기처리
    const productData = await Promise.all(productPromises);

    //두개의 api 하나의 객체로 담기
    const combinedData = cartData.map((item: {}, index: number) => ({
      ...item,
      ite_details: productData[index],
    }));
    return combinedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
