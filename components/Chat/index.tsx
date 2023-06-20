import React from "react";
import Sidebar from "../etc/Sidebar";
import { getChatRoomListQuery } from "@/utils/apis/chat";
import { useRouter } from "next/router";
import NoChatRoomSection from "./NoChatRoomSection";

function Chat() {
  const chatRoomListQuery = getChatRoomListQuery();
  const router = useRouter();
  if (chatRoomListQuery.isSuccess && chatRoomListQuery.data.list[0]) {
    router.push(`/chat/${chatRoomListQuery.data.list[0].id}`);
  }
  return (
    <>
      <Sidebar />
      <NoChatRoomSection />
    </>
  );
}

export default Chat;
