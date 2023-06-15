import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter, useRouter } from "next/router";

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
  return useMutation(() => getRecommend(materials, id), {
    onSuccess: () => router.reload(),
  });
};
