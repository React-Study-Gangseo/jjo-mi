import { accessInstance } from "./axios-api";
import { productDetailAPI } from "./productAPI";

export const postCartAPI = async (productData: {}) => {
  // 장바구니 물건 넣기
  console.log("넘어온값 확인중", productData);
  const res = await accessInstance.post(`/cart/`, productData);
  console.log("api에 응답", res);

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
      item_details: productData[index],
    }));
    return combinedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putCartCountChangeAPI = async (
  cart_item_id: number,
  product_id: number,
  quantity: number,
  is_active: boolean
) => {
  console.log("putAPI에서 들어온 값 확인중", cart_item_id, quantity, is_active);

  const res = await accessInstance.put(`/cart/${cart_item_id}/`, {
    product_id,
    quantity,
    is_active,
  });
  console.log("putAPI에서 확인중", res);
  return res;
};
