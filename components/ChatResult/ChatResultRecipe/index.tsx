import React from "react";
import * as S from "./style";
import { useRouter } from "next/router";

function ChatResultRecipe({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: string;
}) {
  const { asPath } = useRouter();
  return (
    <S.StyledLink href={{ pathname: `${asPath}/[index]`, query: { index } }}>
      <S.Recipe>
        <S.Index>{index}.</S.Index>
        {title}
        <S.StyledLi>{children}</S.StyledLi>
      </S.Recipe>
    </S.StyledLink>
  );
}

export default ChatResultRecipe;
