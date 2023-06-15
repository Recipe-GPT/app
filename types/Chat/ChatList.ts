export interface ChatListType {
  list: ChatType[];
}

interface ChatType {
  id: number;
  requestedIngredients: string[];
  requestedSeasonings: string[];
  recommendRecipe: RecipeType[];
}

interface RecipeType {
  name: string;
  description: string;
}
