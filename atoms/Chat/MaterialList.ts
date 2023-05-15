import { MaterialStatusType } from "@/types/Chat/MaterialStatusType";
import { atom } from "recoil";

export const MaterialListState = atom<{
  [key in MaterialStatusType]: { name: string; isHover: boolean }[];
}>({
  key: "MaterialListState",
  default: {
    INGREDIENT: [],
    SEASONING: [],
  },
});
