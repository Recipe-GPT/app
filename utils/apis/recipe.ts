import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter } from "next/router";

export const getRecommend = async (materials: {
  ingredients: string[];
  seasonings: string[];
}) => {
  return (await instance.post("query/recommend", materials, getAccessToken()))
    .data;
};

export const getRecommendMutation = (
  materials: {
    ingredients: string[];
    seasonings: string[];
  },
  router: NextRouter,
) => {
  return useMutation(() => getRecommend(materials), {
    onSuccess: () => router.push("chat/1"),
  });
};
