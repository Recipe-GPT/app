import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";

export const getIngredientList = async (query: string) => {
  return (
    await instance.get("search/ingredient", {
      params: { query },
      ...getAccessToken(),
    })
  ).data;
};

export const getIngredientListMutation = (query: string) => {
  return useMutation(() => getIngredientList(query));
};

export const getSeasoningList = async (query: string) => {
  return (
    await instance.get("search/seasoning", {
      params: { query },
      ...getAccessToken(),
    })
  ).data;
};

export const getSeasoningListMutation = (query: string) => {
  return useMutation(() => getSeasoningList(query));
};
