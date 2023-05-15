import { MaterialStatusType } from "@/types/Chat/MaterialStatusType";
import { atom } from "recoil";

export const MaterialStatusState = atom<MaterialStatusType>({
  key: "MaterialStatusState",
  default: "INGREDIENT",
});
