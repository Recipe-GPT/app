import React from "react";
import * as S from "./style";
import { FiPlus } from "react-icons/fi";
import { getChatRoomListQuery, makeChatRoomMutation } from "@/utils/apis/chat";

function Sidebar() {
  const chatRoomListQuery = getChatRoomListQuery();
  const charRoomMutation = makeChatRoomMutation();
  return (
    <S.Sidebar>
      <S.NewRecipeButton onClick={() => charRoomMutation.mutate()}>
        <FiPlus size={20} />
        새로운 레시피 만들기
      </S.NewRecipeButton>
      <S.SidebarItemWrap>
        {chatRoomListQuery.isSuccess &&
          chatRoomListQuery.data?.list.map(
            (item: { id: number; name: string }) => {
              return (
                <S.SidebarItem key={item.id} href={`/chat/${item.id}`}>
                  <S.ForkIcon
                    width={20}
                    height={20}
                    src="/images/ForkAndKnife.svg"
                    alt="수저 아이콘"
                  />
                  {item.name}
                </S.SidebarItem>
              );
            },
          )}
      </S.SidebarItemWrap>
    </S.Sidebar>
  );
}

export default Sidebar;
