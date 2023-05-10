import React from "react";
import * as S from "./style";
import BoardRecipeButton from "@/components/etc/Button/BoardRecipeButton";

function BoardMainSection() {
  return (
    <S.BoardMainSection>
      <S.RecipeButtons>
        <BoardRecipeButton>🙌🏻 &nbsp; 레시피 질문하러 가기</BoardRecipeButton>
        <BoardRecipeButton>🖊️ &nbsp; 레시피 작성하러 가기</BoardRecipeButton>
      </S.RecipeButtons>
    </S.BoardMainSection>
  );
}

export default BoardMainSection;
