import React from "react";
import * as S from "./style";

interface PostTitleType {
  children: string;
  title: string;
}

function PostTitle({ children, title }: PostTitleType) {
  return (
    <S.PostTitle>
      <S.Title>{title}</S.Title>
      <S.Description>{children}</S.Description>
    </S.PostTitle>
  );
}

export default PostTitle;
