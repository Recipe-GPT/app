import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { SortedByType } from "@/components/etc/Button/BoardMenuButton";
import { SortedByState } from "@/atoms/Board/SortedBy";

export const postBoard = async (data: FormData) => {
  return (await instance.post("board", data, getAccessToken(true))).data;
};

export const postBoardMutation = (data: FormData) => {
  const router = useRouter();
  return useMutation(() => postBoard(data), {
    onSuccess: () => router.replace("/board"),
  });
};

export const getRecommendBoard = async () => {
  return (await instance.get("board/recommend", getAccessToken())).data;
};

export const getRecommendBoardQuery = () => {
  return useQuery("recommendBoard", getRecommendBoard);
};

export const getTrendingBoard = async () => {
  return (await instance.get("board/trending", getAccessToken())).data;
};

export const getTrendingBoardQuery = () => {
  return useQuery("trendingBoard", getTrendingBoard);
};

export const getDetailBoard = async (id: string) => {
  return (await instance.get(`board/detail/${id}`, getAccessToken())).data;
};

export const getDetailBoardQuery = (id: string, isReady: boolean) => {
  return useQuery(["detailBoard", id], () => getDetailBoard(id), {
    enabled: isReady,
  });
};

export const getSearchBoard = async (
  search: string,
  sortedBy: SortedByType,
) => {
  return (
    await instance.get("board/filter", {
      params: {
        "pagination.page": 1,
        "pagination.size": 8,
        "filter.search": search,
        "filter.sortType": sortedBy,
      },
      ...getAccessToken(),
    })
  ).data;
};

export const getSearchBoardQuery = (search: string) => {
  const [sortedBy, setSortedBy] = useRecoilState<SortedByType>(SortedByState);
  return useMutation(() => getSearchBoard(search, sortedBy));
};
