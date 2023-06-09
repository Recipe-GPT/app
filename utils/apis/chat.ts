import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery } from "react-query";
import { NextRouter, useRouter } from "next/router";

export const getChatRoomList = async () => {
  return (await instance.get("chatroom/find", getAccessToken())).data;
};

export const getChatRoomListQuery = () => {
  return useQuery("chatroom", getChatRoomList);
};

export const makeChatRoom = async () => {
  return (await instance.post("chatroom", null, getAccessToken())).data;
};

export const makeChatRoomMutation = () => {
  const router = useRouter();
  return useMutation(makeChatRoom, {
    onSuccess: (data) => {
      router.push(`/chat/${data.chatRoomId}`);
    },
  });
};
