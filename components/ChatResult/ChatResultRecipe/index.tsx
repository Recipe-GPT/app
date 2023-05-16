import React from "react";
import * as S from "./style";

function ChatResultRecipe({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: string;
}) {
  return (
    <S.Recipe>
      <S.Index>{index}.</S.Index>
      {title}
      <S.StyledLi>{children}</S.StyledLi>
    </S.Recipe>
  );
}

export default ChatResultRecipe;
