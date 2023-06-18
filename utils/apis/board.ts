import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

export const postBoard = async (data: FormData) => {
  return (await instance.post("board", data, getAccessToken(true))).data;
};

export const postBoardMutation = (data: FormData) => {
  const router = useRouter();
  return useMutation(() => postBoard(data), {
    onSuccess: () => router.replace("/board"),
  });
};
