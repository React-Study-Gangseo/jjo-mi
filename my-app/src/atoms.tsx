import { atom } from "recoil";
import { atomFamily } from "recoil";

export const userTypeValue = atom<string>({
  key: "login_type",
  default: "GUEST",
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
