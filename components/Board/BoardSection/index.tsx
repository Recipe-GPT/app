import React from "react";
import * as S from "./style";
import { AiFillFire } from "react-icons/ai";
import BoardItem from "../BoardItem";

function BoardSection({ isYellow }: { isYellow?: true }) {
  return (
    <S.BoardSection isYellow={isYellow}>
      <S.Title isYellow={isYellow}>
        {isYellow ? (
          <>
            최근 떠오르는 레시피
            <AiFillFire color="#FFFFFF" />
          </>
        ) : (
          <span>
            이런 <S.Emphasis>레시피</S.Emphasis> 어떠세요?
          </span>
        )}
      </S.Title>
      <S.BoardWrap>
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </S.BoardWrap>
    </S.BoardSection>
  );
}

export default BoardSection;
