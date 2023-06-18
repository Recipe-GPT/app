import React from "react";
import * as S from "./style";
import BoardRecipeButton from "@/components/etc/Button/BoardRecipeButton";
import BoardItem from "../BoardItem";
import BoardMenuButton from "@/components/etc/Button/BoardMenuButton";

function BoardMainSection() {
  return (
    <S.BoardMainSection>
      <S.RecipeButtons>
        <BoardRecipeButton href="/chat">🙌🏻 &nbsp; 레시피 질문하러 가기</BoardRecipeButton>
        <BoardRecipeButton href="/board/post">🖊️ &nbsp; 레시피 작성하러 가기</BoardRecipeButton>
      </S.RecipeButtons>
      <S.BoardMenuWrap>
        <BoardMenuButton />
        <S.SearchWrap>
          <S.Search placeholder="레시피 검색" />
          <S.SearchButton size={20} />
        </S.SearchWrap>
      </S.BoardMenuWrap>
      <S.BoardMainWrap>
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </S.BoardMainWrap>
    </S.BoardMainSection>
  );
}

export default BoardMainSection;
