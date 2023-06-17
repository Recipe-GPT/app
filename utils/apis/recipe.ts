import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter, useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "@/atoms/Etc/isLoading";
import { MaterialType, RecipeQuestionType } from "@/types/Chat/ChatList";

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

export const getRecipe = async (data: RecipeQuestionType, id: string) => {
  return (await instance.post(`query/recipe/${id}`, data, getAccessToken()))
    .data;
};

export const getRecipeMutation = (
  data: RecipeQuestionType,
  id: string,
  i: number,
) => {
  const router = useRouter();
  const setIsLoading = useSetRecoilState(isLoadingState);
  return useMutation(() => getRecipe(data, id), {
    onSettled: () => {
      setIsLoading(false);
    },
    onSuccess: () => {
      router.push(`${router.asPath}/${i}`);
    },
  });
};
