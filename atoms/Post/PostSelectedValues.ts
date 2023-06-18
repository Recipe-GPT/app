import { MaterialType } from "@/types/Chat/ChatList";
import { Difficulty } from "@/types/Post/Difficulty";
import { atom } from "recoil";

interface PostSelectedValuesType {
  name: string;
  description: string;
  ingredients: MaterialType[];
  seasonings: MaterialType[];
  recipe: { value: string }[];
}

export const PostSelectedValuesState = atom<PostSelectedValuesType>({
  key: "PostSelectedValuesState",
  default: {
    name: "",
    description: "",
    ingredients: [
      { name: "", quantity: "" },
      { name: "", quantity: "" },
      { name: "", quantity: "" },
    ],
    seasonings: [
      { name: "", quantity: "" },
      { name: "", quantity: "" },
      { name: "", quantity: "" },
    ],
    recipe: [{ value: "" }, { value: "" }, { value: "" }],
  },
});
