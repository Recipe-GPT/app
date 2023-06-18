import { MaterialType } from "@/types/Chat/ChatList";
import { Difficulty } from "@/types/Post/Difficulty";
import { atom } from "recoil";

interface PostSelectedValuesType {
  name: string;
  description: string;
  ingredients: MaterialType[];
  seasonings: MaterialType[];
  recipe: string[];
  serving: number;
  time: number;
  difficulty: Difficulty;
}

export const PostSelectedValuesState = atom<PostSelectedValuesType>({
  key: "PostSelectedValuesState",
  default: {
    name: "",
    description: "",
    ingredients: [],
    seasonings: [],
    recipe: [],
    serving: 0,
    time: 0,
    difficulty: "VERY_EASY",
  },
});
