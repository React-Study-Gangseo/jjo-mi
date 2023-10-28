import { atom, selector, atomFamily } from "recoil";

import { CheckedItem } from "./interface/types";

type ItemDetail = {
  price: number;
  shipping_fee: number;
};

type CartItem = {
  cart_item_id: string;
  quantity: number;
  item_details: ItemDetail;
};

export const userTypeValue = atom<string>({
  key: "login_type",
  default: "GUEST",
});

export const userType = atom<string>({
  key: "login_type",
  default: "BUYER",
});

export const headerState = atomFamily({
  key: "header",
  default: (path) => {
    if (path === "/login") {
      return null;
    } else {
      return "default";
    }
  },
});

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});

// 장바구니 아이템 목록을 저장하는 상태
export const cartItemsState = atom<CartItem[]>({
  key: "cartItemsState",
  default: [],
});

export const cartItemState = atomFamily({
  key: "cartItemState",
  default: {},
});

// 각 아이템의 수량을 저장하는 상태 (key에 cart_item_id를 사용)
export const quantityState = atomFamily({
  key: "quantityState",
  default: (id) => 0, // 기본적으로 수량은 0으로 설정
});

export const totalPriceSelector = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const items = get(cartItemsState);
    return items.reduce(
      (acc, item) => acc + item.item_details.price * item.quantity,
      0
    );
  },
});

export const deliveryFeeSelector = selector({
  key: "deliveryFee",
  get: ({ get }) => {
    const items = get(cartItemsState);
    return items.reduce((acc, item) => acc + item.item_details.shipping_fee, 0);
  },
});

export const checkedItemsState = atom<CheckedItem[]>({
  key: "checkedItemsState",
  default: [],
});
