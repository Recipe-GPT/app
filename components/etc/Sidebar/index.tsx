import React, { useEffect, useState } from "react";
import * as S from "./style";
import { FiPlus } from "react-icons/fi";
import {
  getChatRoomListQuery,
  makeChatRoomMutation,
  updateChatRoomMutation,
} from "@/utils/apis/chat";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { ChatRoomListState } from "@/atoms/Chat/ChatRoomList";

function Sidebar() {
  const chatRoomListQuery = getChatRoomListQuery();
  const chatRoomList = useRecoilValue(ChatRoomListState);
  const chatRoomMutation = makeChatRoomMutation();
  const router = useRouter();
  const [chatRoomName, setChatRoomName] = useState("");
  const [isModify, setIsModify] = useState(false);
  const {
    query: { recipeId },
  } = router;
  const updateChatRoomFunc = updateChatRoomMutation(
    recipeId as string,
    chatRoomName,
  );

  // useEffect(() => {
  //   setIsModify(false);
  // }, [router.asPath]);

  return (
    <S.Sidebar>
      <S.NewRecipeButton onClick={() => chatRoomMutation.mutate()}>
        <FiPlus size={20} />
        새로운 레시피 만들기
      </S.NewRecipeButton>
      <S.SidebarItemWrap>
        {chatRoomListQuery.isSuccess &&
          chatRoomList.list.map(
            ({ id, name }: { id: number; name: string }) => (
              <S.SidebarItem
                key={id}
                href={`/chat/${id}`}
                index={id}
                pathname={recipeId as string}
                passHref
                onClick={() => {
                  if (id !== Number(recipeId)) setIsModify(false);
                }}
              >
                <S.NameWrap>
                  <S.ForkIcon
                    width={20}
                    height={20}
                    src="/images/ForkAndKnife.svg"
                    alt="수저 아이콘"
                  />
                  {id === Number(recipeId) && isModify ? (
                    <S.UpdateNameInput
                      value={chatRoomName}
                      onChange={(e) => setChatRoomName(e.target.value)}
                    />
                  ) : (
                    name
                  )}
                </S.NameWrap>
                {id === Number(recipeId) && (
                  <S.IconWrap>
                    {isModify ? (
                      <AiOutlineCheck
                        size={20}
                        onClick={() => {
                          updateChatRoomFunc.mutate();
                          setIsModify(false);
                        }}
                      />
                    ) : (
                      <Image
                        src="/images/Pencil.svg"
                        alt={`${name} 채팅방 수정 버튼`}
                        width={20}
                        height={20}
                        onClick={(e) => {
                          // e.stopPropagation();
                          setIsModify(true);
                          setChatRoomName(name);
                        }}
                      />
                    )}
                    {isModify ? (
                      <MdClose size={20} onClick={() => setIsModify(false)} />
                    ) : (
                      <Image
                        src="/images/TrashCan.svg"
                        alt={`${name} 채팅방 삭제 버튼`}
                        width={20}
                        height={20}
                      />
                    )}
                  </S.IconWrap>
                )}
              </S.SidebarItem>
            ),
          )}
      </S.SidebarItemWrap>
    </S.Sidebar>
  );
}

export default Sidebar;
