import React from "react";
import Sidebar from "../etc/Sidebar";
import ChatResultSection from "./ChatResultSection";
import { getChatListQuery } from "@/utils/apis/chat";
import { useRouter } from "next/router";
import ChatSection from "../Chat/ChatSection";
import ChatDetailSection from "../ChatDetail/ChatDetailSection";
import { useSetRecoilState } from "recoil";
import { SelectedRecipeState } from "@/atoms/Chat/SelectedRecipe";

function ChatResult() {
  const router = useRouter();
  const {
    query: { recipeId },
  } = router;
  const chatListQuery = getChatListQuery(recipeId as string);
  const setSelectedRecipe = useSetRecoilState(SelectedRecipeState);
  return (
    <>
      <Sidebar />
      {chatListQuery.isLoading ? null : chatListQuery.data?.list.length ? (
        <ChatResultSection data={chatListQuery.data} />
      ) : (
        <ChatSection />
      )}
    </>
  );
}

export default ChatResult;
