import { atom } from "recoil";
type MaterialStatusType = "SEASONING" | "INGREDIENT";

export const MaterialStatusState = atom<MaterialStatusType>({
  key: "MaterialStatusState",
  default: "INGREDIENT",
});
