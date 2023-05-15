import React from "react";
import * as S from "./style";
import Image from "next/image";
import ChatInput from "../ChatInput";

function ChatSection() {
  return (
    <S.ChatSection>
      <S.ChatWrap>
        <Image
          alt="Recpie GPT 아이콘"
          src="./images/YellowLogo.svg"
          width={40}
          height={40}
        />
        <S.ContentWrap>
          <S.GreedingContent>
            환영합니다! 음식에 들어갔으면 하는 재료를 입력해주세요.
          </S.GreedingContent>
          <S.Content>재료 :</S.Content>
          <S.Content>조미료 :</S.Content>
        </S.ContentWrap>
      </S.ChatWrap>
      <ChatInput />
    </S.ChatSection>
  );
}

export default ChatSection;
