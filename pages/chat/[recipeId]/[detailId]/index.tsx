import { SelectedRecipeState } from "@/atoms/Chat/SelectedRecipe";
import ChatDetail from "@/components/ChatDetail";
import { ChatType } from "@/types/Chat/ChatList";
import { getChatListQuery } from "@/utils/apis/chat";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

function ChatDetailPage() {
  const router = useRouter();
  const {
    query: { recipeId, detailId },
  } = router;
  const chatListQuery = getChatListQuery(recipeId as string);
  const setSelectedRecipe = useSetRecoilState(SelectedRecipeState);
  if (
    chatListQuery.isSuccess &&
    !!chatListQuery.data.list[0].selectedRecipe.length
  ) {
    setSelectedRecipe(
      chatListQuery.data.list[0].selectedRecipe.filter(
        (item: ChatType) => String(item.id) === detailId,
      )[0],
    );
  }
  return (
    <>
      <Head>
        <title>디테일페이지임 ㅋㅋ</title>
      </Head>
      <ChatDetail />
    </>
  );
}

export default ChatDetailPage;
