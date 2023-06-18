export interface ChatListType {
  list: ChatType[];
}

export interface ChatType {
  id: number;
  requestedIngredients: string[];
  requestedSeasonings: string[];
  recommendRecipe: RecipeType[];
  selectedRecipe: RecipeType[];
}

export interface MaterialType {
  name: string;
  quantity: string;
}

export interface RecipeType {
  id: number;
  name: string;
  description: string;
  ingredients: MaterialType[];
  seasonings: MaterialType[];
  recipe?: string[];
}

export interface RecipeQuestionType {
  name: string;
  description: string;
  ingredients: string[];
  seasonings: string[];
}
