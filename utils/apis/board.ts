import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation } from "react-query";

export const postBoard = async (data: FormData) => {
  return (await instance.post("board", data, getAccessToken(true))).data;
};

export const postBoardMutation = (data: FormData) => {
  return useMutation(() => postBoard(data));
};
