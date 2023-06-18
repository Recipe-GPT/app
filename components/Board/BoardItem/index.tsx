import React from "react";
import * as S from "./style";

function BoardItem({ data }: { data: BoardType }) {
  return (
    <S.BoardItem>
      <S.FoodWrap>
        <S.Food src={data?.imageUrl} alt="음식사진" fill />
      </S.FoodWrap>
      <S.Content>
        <S.TitleWrap>
          <S.Title>{data?.name}</S.Title>
          <S.Description>{data?.description}</S.Description>
        </S.TitleWrap>
        <S.InfoWrap>
          <S.Info>{data?.writer}</S.Info>
          <S.Info>ᐧ</S.Info>
          <S.Info>{data?.createdDate}</S.Info>
        </S.InfoWrap>
      </S.Content>
    </S.BoardItem>
  );
  return <></>;
}

export default BoardItem;
