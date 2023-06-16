export interface ChatListType {
  list: ChatType[];
}

interface ChatType {
  id: number;
  requestedIngredients: string[];
  requestedSeasonings: string[];
  recommendRecipe: RecipeType[];
  selectedRecipe: RecipeType;
}

export interface MaterialType {
  name: string;
  quantity: string;
}

interface RecipeType {
  id: number;
  name: string;
  description: string;
  ingredients: MaterialType[];
  seasonings: MaterialType[];
}
