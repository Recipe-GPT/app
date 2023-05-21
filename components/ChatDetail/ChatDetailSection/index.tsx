import React from "react";
import * as S from "./style";
import { IoAlarmOutline } from "react-icons/io5";
import ChatDetailTitle from "../ChatDetailTitle";
import ChatDetailMaterialTitle from "../ChatDetailMaterialTitle";
import ChatDetailRecipeStep from "../ChatDetailRecipeStep";
import { useRouter } from "next/router";
import ChatDetailButton from "@/components/etc/Button/ChatDetailButton";

function ChatDetailSection() {
  const router = useRouter();
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
                <S.MaterialItemWrap>
                  <S.MaterialItem>
                    <S.MaterialName>파인애플</S.MaterialName>
                    <S.MaterialCount>3</S.MaterialCount>
                  </S.MaterialItem>
                  <S.MaterialItem>
                    <S.MaterialName>파인애플</S.MaterialName>
                    <S.MaterialCount>3</S.MaterialCount>
                  </S.MaterialItem>
                  <S.MaterialItem>
                    <S.MaterialName>파인애플</S.MaterialName>
                    <S.MaterialCount>3</S.MaterialCount>
                  </S.MaterialItem>
                </S.MaterialItemWrap>
              </S.Material>
              <S.Material>
                <ChatDetailMaterialTitle>소스재료</ChatDetailMaterialTitle>
                <S.MaterialItemWrap>
                  <S.MaterialItem>
                    <S.MaterialName>파인애플</S.MaterialName>
                    <S.MaterialCount>3</S.MaterialCount>
                  </S.MaterialItem>
                  <S.MaterialItem>
                    <S.MaterialName>파인애플</S.MaterialName>
                    <S.MaterialCount>3</S.MaterialCount>
                  </S.MaterialItem>
                  <S.MaterialItem>
                    <S.MaterialName>파인애플</S.MaterialName>
                    <S.MaterialCount>3</S.MaterialCount>
                  </S.MaterialItem>
                </S.MaterialItemWrap>
              </S.Material>
            </S.MaterialWrap>
          </S.Content>
          <S.RecipeContent>
            <ChatDetailTitle>레시피</ChatDetailTitle>
            <S.StepWrap>
              <ChatDetailRecipeStep index={1}>
                삼겹살을 먹기 좋은 크기로 자릅니다.
              </ChatDetailRecipeStep>
              <ChatDetailRecipeStep index={2}>
                삼겹살을 먹기 좋은 크기로 자릅니다.
              </ChatDetailRecipeStep>
              <ChatDetailRecipeStep index={3}>
                삼겹살을 먹기 좋은 크기로 자릅니다.
              </ChatDetailRecipeStep>
              <ChatDetailRecipeStep index={14}>
                삼겹살을 먹기 좋은 크기로 자릅니다.
              </ChatDetailRecipeStep>
            </S.StepWrap>
          </S.RecipeContent>
          <S.ButtonWrap>
            <ChatDetailButton href={`/chat/${router.query?.recipeId}`}>
              이전 화면으로 가기
            </ChatDetailButton>
            <ChatDetailButton href="/">레시피 공유하기</ChatDetailButton>
          </S.ButtonWrap>
        </S.ContentWrap>
      </S.ChatDetailSection>
    </>
  );
}

export default ChatDetailSection;
