import React from "react";
import * as S from "./style";
import { useRouter } from "next/router";

function BoardItem({ data }: { data: BoardType }) {
  const router = useRouter();
  return (
    <S.BoardItem onClick={() => router.push(`/board/${data?.boardId}`)}>
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
