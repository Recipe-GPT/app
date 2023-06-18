import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter, useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "@/atoms/Etc/isLoading";
import { MaterialType, RecipeQuestionType } from "@/types/Chat/ChatList";
import { SelectedRecipeState } from "@/atoms/Chat/SelectedRecipe";
import { updateChatRoomMutation } from "./chat";

export const getRecommend = async (
  materials: {
    ingredients: string[];
    seasonings: string[];
  },
  id: string,
) => {
  return (
    await instance.post(`query/recommend/${id}`, materials, getAccessToken())
  ).data;
};

export const getRecommendMutation = (
  materials: {
    ingredients: string[];
    seasonings: string[];
  },
  id: string,
) => {
  const router = useRouter();
  const setIsLoading = useSetRecoilState(isLoadingState);
  return useMutation(() => getRecommend(materials, id), {
    onSettled: () => {
      setIsLoading(false);
      router.reload();
    },
  });
};

export const getRecipe = async (
  data: RecipeQuestionType,
  id: string,
  recipeId: number,
) => {
  return (
    await instance.post(
      `query/recipe/${id}/${recipeId}`,
      data,
      getAccessToken(),
    )
  ).data;
};

export const getRecipeMutation = (
  data: RecipeQuestionType,
  id: string,
  recipeId: number,
  // i: number,
) => {
  const router = useRouter();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const updateChatRoom = updateChatRoomMutation(id, data.name);
  return useMutation(() => getRecipe(data, id, recipeId), {
    onSettled: () => {
      setIsLoading(false);
    },
    onSuccess: () => {
      router.push(`${router.asPath}/${recipeId}`);
      updateChatRoom.mutate();
    },
  });
};
