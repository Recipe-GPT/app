import { SortedByType } from "@/components/etc/Button/BoardMenuButton";
import { atom } from "recoil";

export const SortedByState = atom<SortedByType>({
  key: "SortedByState",
  default: "RECENT",
});
