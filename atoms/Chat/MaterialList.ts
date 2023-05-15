import { MaterialStatusType } from "@/types/Chat/MaterialStatusType";
import { atom } from "recoil";

export const MaterialListState = atom<{
  [key in MaterialStatusType]: string[];
}>({
  key: "MaterialListState",
  default: {
    INGREDIENT: [],
    SEASONING: [],
  },
});
