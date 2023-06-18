import { RecipeType } from "@/types/Chat/ChatList";
import { atom } from "recoil";

export const SelectedRecipeState = atom<RecipeType>({
  key: "SelectedRecipeState",
  default: {
    id: 0,
    name: "",
    description: "",
    ingredients: [],
    seasonings: [],
    recipe: [],
  },
});
