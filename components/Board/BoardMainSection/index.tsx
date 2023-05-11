import React from "react";
import * as S from "./style";
import BoardRecipeButton from "@/components/etc/Button/BoardRecipeButton";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import BoardItem from "../BoardItem";

function BoardMainSection() {
  return (
    <S.BoardMainSection>
      <S.RecipeButtons>
        <BoardRecipeButton>🙌🏻 &nbsp; 레시피 질문하러 가기</BoardRecipeButton>
        <BoardRecipeButton>🖊️ &nbsp; 레시피 작성하러 가기</BoardRecipeButton>
      </S.RecipeButtons>
      <S.BoardMenuWrap>
        <S.Menu>
          <CgArrowsExchangeAltV size={40} />
          최신순
        </S.Menu>
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
