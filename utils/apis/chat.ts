import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter } from "next/router";

export const getChatRoomList = async () => {
  return (await instance.get("chatroom/find", getAccessToken())).data;
};

export const getChatRoomListQuery = () => {
  return useQuery("chatroom", getChatRoomList);
};
