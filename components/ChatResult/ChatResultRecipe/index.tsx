import React, { useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { MaterialType } from "@/types/Chat/ChatList";

function ChatResultRecipe({
  index,
  title,
  children,
  data,
  length,
}: {
  index: number;
  title: string;
  children: string;
  data: {
    ingredients: MaterialType[];
    seasonings: MaterialType[];
  };
  length: number;
}) {
  const { asPath } = useRouter();
  const [isOpenList, setIsOpenList] = useState(Array(length).fill(false));
  console.log(isOpenList);
  const i = index + 1;
  return (
    <S.StyledLink href={{ pathname: `${asPath}/[index]`, query: { index: i } }}>
      <S.Recipe>
        <S.Index>{i}.</S.Index>
        {title}
        <S.StyledLi>{children}</S.StyledLi>
        <S.MaterialOpenButton
          onClick={(e) => {
            e.preventDefault();
            const newArray = [...isOpenList];
            newArray[index] = !newArray[index];
            setIsOpenList(newArray);
          }}
        >
          엄
        </S.MaterialOpenButton>
        {isOpenList[index] && JSON.stringify(data)}
      </S.Recipe>
    </S.StyledLink>
  );
}

export default ChatResultRecipe;
