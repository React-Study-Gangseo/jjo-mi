import { instance } from "./axios-api";

const postUserLogin = async (formData: {}) => {
  console.log("api들고간 값: ", formData);

  const res = await instance.post(`/accounts/login/`, formData);
  console.log("api에서 확인중:", res);
  return res.data;
};

export { postUserLogin };
