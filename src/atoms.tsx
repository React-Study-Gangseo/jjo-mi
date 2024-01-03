import { atom, selector, atomFamily } from "recoil";
import { CartItemType } from "./interface/types";
// import { selectedItems, selectProduct, quantityState } from './atoms';

// export const userTypeValue = atom<string>({
//   key: "login_type",
//   default: "GUEST",
// });

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
export const cartItemsState = atom<CartItemType[]>({
  key: "cartItemsState",
  default: [],
});
// 수량
// export const quantityState = atom<number>({
//   key: "quantityState",
//   default: 1,
// });

// export const cartItemState = atomFamily({
//   key: "cartItemState",
//   default: {},
// });
export const selectProduct = atom<CartItemType[]>({
  key: "selectProduct",
  default: [],
});

export const activeProductsSelector = selector({
  key: "activeProductsSelector",
  get: ({ get }) => {
    const selectProductState = get(selectProduct);
    return selectProductState.filter((item) => item.is_active);
  },
});

// 각 아이템의 수량을 저장하는 상태 (key에 cart_item_id를 사용)
// export const quantityState = atomFamily({
//   key: "quantityState",
//   default: (id) => 0, // 기본적으로 수량은 0으로 설정
// });

// export const totalPriceSelector = selector({
//   key: "totalPrice",
//   get: ({ get }) => {
//     const checkedItems = get(checkedItemsState);
//     const cartItems = get(cartItemsState);
//     const total = checkedItems.reduce((totalPrice, itemId) => {
//       const selectedItem = cartItems.find(
//         (item) => item.cart_item_id === itemId
//       );
//       if (selectedItem) {
//         const quantity = get(quantityState(selectedItem.cart_item_id));
//         totalPrice += selectedItem.item_details.price * quantity;
//       }
//       return totalPrice;
//     }, 0);

//     return total;
//   },
// });

// export const deliveryFeeSelector = selector({
//   key: "deliveryFee",
//   get: ({ get }) => {
//     const cartItems = get(cartItemsState);
//     const checkedItems = get(checkedItemsState);
//     const checkedItemsDetails = cartItems.filter((item) =>
//       checkedItems.includes(item.cart_item_id)
//     );
//     const deliveryFee = checkedItemsDetails.reduce(
//       (acc, item) => acc + item.item_details.shipping_fee,
//       0
//     );
//     return deliveryFee;
//     // items.reduce((acc, item) => acc + item.item_details.shipping_fee, 0);
//   },
// });

// export const checkedItemsState = atom<number[]>({
//   key: "checkedItemsState",
//   default: [],
// });
