import React from "react";
import * as S from "./style";
import Image from "next/image";
import ChatInput from "../ChatInput";
import { MaterialListState } from "@/atoms/Chat/MaterialList";
import { useRecoilValue } from "recoil";

function ChatSection() {
  const materialList = useRecoilValue(MaterialListState);
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
          <S.Content>
            <S.ShortContentLabel>재료 :</S.ShortContentLabel>
            <S.MaterialWrap>
              {materialList["INGREDIENT"].map((item: string, index: number) => {
                return <S.Material key={index}>{item}</S.Material>;
              })}
            </S.MaterialWrap>
          </S.Content>
          <S.Content>
            <S.ContentLabel>조미료 :</S.ContentLabel>
            <S.MaterialWrap>
              {materialList["SEASONING"].map((item: string, index: number) => {
                return <S.Material key={index}>{item}</S.Material>;
              })}
            </S.MaterialWrap>
          </S.Content>
        </S.ContentWrap>
      </S.ChatWrap>
      <ChatInput />
    </S.ChatSection>
  );
}

export default ChatSection;
