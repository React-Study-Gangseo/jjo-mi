import { atom } from "recoil";
import { atomFamily } from "recoil";

export const userTypeValue = atom<string>({
  key: "login_type",
  default: "GUEST",
});

export const authTokenState = atom<string | null>({
  key: "authToken",
  default: null,
});

export const usernameSatate = atom<string | null>({
  key: "username",
  default: null,
});

export const userTypeState = atom<string | null>({
  key: "userType",
  default: null,
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
