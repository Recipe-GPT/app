import { atom } from "recoil";

export const isNeedLoginState = atom<boolean>({
  key: "isNeedLoginState",
  default: false,
});
