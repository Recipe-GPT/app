import React from "react";
import * as S from "./style";
import * as CS from "@/components/Chat/ChatSection/style";
import { IoAlarmOutline } from "react-icons/io5";
import ChatDetailTitle from "../ChatDetailTitle";
import ChatDetailMaterialTitle from "../ChatDetailMaterialTitle";

function ChatDetailSection() {
  return (
    <>
      <S.ChatDetailSection>
        <S.Head>
          <S.Title>파인애플 볶음밥</S.Title>
          <S.Info>
            <S.InfoItem>
              <IoAlarmOutline size={24} />
              <S.InfoText>900</S.InfoText>
            </S.InfoItem>
          </S.Info>
        </S.Head>
        <S.ContentWrap>
          <S.Content>
            <ChatDetailTitle>재료</ChatDetailTitle>
            <S.MaterialWrap>
              <S.Material>
                <ChatDetailMaterialTitle>기본재료</ChatDetailMaterialTitle>
              </S.Material>
              <S.Material>
                <ChatDetailMaterialTitle>기본재료</ChatDetailMaterialTitle>
              </S.Material>
            </S.MaterialWrap>
          </S.Content>
        </S.ContentWrap>
      </S.ChatDetailSection>
    </>
  );
}

export default ChatDetailSection;
