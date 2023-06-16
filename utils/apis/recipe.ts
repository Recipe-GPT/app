import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter, useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { isLoadingState } from "@/atoms/Etc/isLoading";

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
