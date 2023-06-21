import React, { useEffect, useState } from "react";
import * as S from "./style";
import BoardRecipeButton from "@/components/etc/Button/BoardRecipeButton";
import BoardItem from "../BoardItem";
import BoardMenuButton from "@/components/etc/Button/BoardMenuButton";
import { getSearchBoardQuery } from "@/utils/apis/board";
import { useRecoilState } from "recoil";
import { SearchState } from "@/atoms/Board/Search";

function BoardMainSection() {
  const [search, setSearch] = useRecoilState(SearchState);
  const getSearchBoardFunc = getSearchBoardQuery(search);
  useEffect(() => {
    getSearchBoardFunc.refetch();
  }, []);
  return (
    <S.BoardMainSection>
      <S.RecipeButtons>
        <BoardRecipeButton href="/chat">
          🙌🏻 &nbsp; 레시피 질문하러 가기
        </BoardRecipeButton>
        <BoardRecipeButton href="/board/post">
          🖊️ &nbsp; 레시피 작성하러 가기
        </BoardRecipeButton>
      </S.RecipeButtons>
      <S.BoardMenuWrap>
        <BoardMenuButton />
        <S.SearchWrap>
          <S.Search
            placeholder="레시피 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.SearchButton
            size={20}
            onClick={() => getSearchBoardFunc.refetch()}
          />
        </S.SearchWrap>
      </S.BoardMenuWrap>
      <S.BoardMainWrap>
        {getSearchBoardFunc.isSuccess &&
          getSearchBoardFunc.data?.list.map((item: BoardType) => {
            return <BoardItem data={item} />;
          })}
      </S.BoardMainWrap>
    </S.BoardMainSection>
  );
}

export default BoardMainSection;
