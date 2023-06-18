import React from "react";
import * as S from "./style";

function BoardItem() {

  return (
    <S.BoardItem>
      <S.FoodWrap>
        <S.Food src="/images/Food.svg" alt="음식사진" fill />
      </S.FoodWrap>
      <S.Content>
        <S.TitleWrap>
          <S.Title>음식이름음식이름음식이름</S.Title>
          <S.Description>달달하면서 매콤한 간단 LA갈비 달달하면서 매콤한 간단 LA갈비 달달하면서 매콤한 간단 LA갈비</S.Description>
        </S.TitleWrap>
        <S.InfoWrap>
          <S.Info>작성자</S.Info>
          <S.Info>ᐧ</S.Info>
          <S.Info>2023-04-04</S.Info>
        </S.InfoWrap>
      </S.Content>
    </S.BoardItem>
  );
}

export default BoardItem;
