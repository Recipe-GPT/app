import { getAccessToken } from "@/functions/getAccessToken";
import { instance } from "../instance";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { NextRouter, useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { ChatRoomListState } from "@/atoms/Chat/ChatRoomList";

export const getChatRoomList = async () => {
  return (await instance.get("chatroom/find", getAccessToken())).data;
};

export const getChatRoomListQuery = () => {
  const setChatRoomList = useSetRecoilState(ChatRoomListState);
  return useQuery("chatroom", getChatRoomList, {
    onSuccess: (data) => setChatRoomList(data),
  });
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

export const updateChatRoom = async (id: string, name: string) => {
  return (
    await instance.put(`chatroom/update/${id}`, { name }, getAccessToken())
  ).data;
};

export const updateChatRoomMutation = (id: string, name: string) => {
  const queryClient = useQueryClient();
  const setChatRoomList = useSetRecoilState(ChatRoomListState);
  return useMutation(() => updateChatRoom(id, name), {
    onSuccess: () => {
      queryClient
        .fetchQuery("chatroom", getChatRoomList)
        .then((data) => setChatRoomList(data));
    },
  });
};

export const deleteChatRoom = async (id: string) => {
  return (await instance.delete(`chatroom/delete/${id}`, getAccessToken()))
    .data;
};

export const deleteChatRoomMutation = (id: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const setChatRoomList = useSetRecoilState(ChatRoomListState);
  return useMutation(() => deleteChatRoom(id), {
    onSuccess: () => {
      queryClient
        .fetchQuery("chatroom", getChatRoomList)
        .then((data) => setChatRoomList(data))
        .then(() => router.replace("/chat"));
    },
  });
};
