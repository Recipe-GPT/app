import React from "react";
import * as S from "./style";
import { IoAlarmOutline } from "react-icons/io5";
import ChatDetailTitle from "../ChatDetailTitle";
import ChatDetailMaterialTitle from "../ChatDetailMaterialTitle";
import ChatDetailRecipeStep from "../ChatDetailRecipeStep";
import { useRouter } from "next/router";
import ChatDetailButton from "@/components/etc/Button/ChatDetailButton";
import { RecipeType } from "@/types/Chat/ChatList";
import { useRecoilValue } from "recoil";
import { SelectedRecipeState } from "@/atoms/Chat/SelectedRecipe";
import { useSetRecoilState } from "recoil";
import { PostSelectedValuesState } from "@/atoms/Post/PostSelectedValues";

function ChatDetailSection() {
  const router = useRouter();
  const setPostSelectedValues = useSetRecoilState(PostSelectedValuesState);
  const selectedRecipe = useRecoilValue(SelectedRecipeState);
  if (selectedRecipe?.name) {
    const { name, ingredients, seasonings, recipe, description } =
      selectedRecipe;
    return (
      <>
        <S.ChatDetailSection>
          <S.Head>
            <S.Title>{name}</S.Title>
            {/* <S.Info>
              <S.InfoItem>
                <IoAlarmOutline size={24} />
                <S.InfoText>900</S.InfoText>
              </S.InfoItem>
            </S.Info> */}
          </S.Head>
          <S.ContentWrap>
            <S.Content>
              <ChatDetailTitle>재료</ChatDetailTitle>
              <S.MaterialWrap>
                <S.Material>
                  <ChatDetailMaterialTitle>기본재료</ChatDetailMaterialTitle>
                  <S.MaterialItemWrap>
                    {ingredients.map((item) => {
                      return (
                        <S.MaterialItem>
                          <S.MaterialName>{item.name}</S.MaterialName>
                          <S.MaterialCount>
                            {item.quantity ?? ""}
                          </S.MaterialCount>
                        </S.MaterialItem>
                      );
                    })}
                  </S.MaterialItemWrap>
                </S.Material>
                <S.Material>
                  <ChatDetailMaterialTitle>소스재료</ChatDetailMaterialTitle>
                  <S.MaterialItemWrap>
                    {seasonings.map((item) => {
                      return (
                        <S.MaterialItem>
                          <S.MaterialName>{item.name}</S.MaterialName>
                          <S.MaterialCount>
                            {item.quantity ?? ""}
                          </S.MaterialCount>
                        </S.MaterialItem>
                      );
                    })}
                  </S.MaterialItemWrap>
                </S.Material>
              </S.MaterialWrap>
            </S.Content>
            <S.RecipeContent>
              <ChatDetailTitle>레시피</ChatDetailTitle>
              <S.StepWrap>
                {recipe?.map((item, index) => {
                  return (
                    <ChatDetailRecipeStep index={index + 1}>
                      {item}
                    </ChatDetailRecipeStep>
                  );
                })}
              </S.StepWrap>
            </S.RecipeContent>
            <S.ButtonWrap>
              <ChatDetailButton href={`/chat/${router.query?.recipeId}`}>
                이전 화면으로 가기
              </ChatDetailButton>
              <ChatDetailButton
                href={"/board/post"}
                onClick={() => {
                  console.log({
                    name,
                    ingredients,
                    seasonings,
                    recipe: recipe.map((item) => ({ value: item })),
                    description,
                  });
                  setPostSelectedValues({
                    name,
                    ingredients,
                    seasonings,
                    recipe: recipe.map((item) => ({ value: item })),
                    description,
                  });
                }}
              >
                레시피 공유하기
              </ChatDetailButton>
            </S.ButtonWrap>
          </S.ContentWrap>
        </S.ChatDetailSection>
      </>
    );
  }
  return <></>;
}

export default ChatDetailSection;
