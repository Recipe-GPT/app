import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { MaterialType } from "@/types/Chat/ChatList";
import { Material } from "../ChatResultSection/style";
import { useRecoilState } from "recoil";
import { isLoadingState } from "@/atoms/Etc/isLoading";
import { getRecipeMutation } from "@/utils/apis/recipe";

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
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const i = index + 1;
  const { ingredients, seasonings } = data;
  const router = useRouter();
  const {
    query: { recipeId },
  } = router;
  const getRecipe = getRecipeMutation(
    {
      name: title,
      description: children,
      ingredients: ingredients.map((item) => item.name),
      seasonings: seasonings.map((item) => item.name),
    },
    recipeId as string,
    i,
  );
  useEffect(() => {
    if (getRecipe.isLoading) {
      setIsLoading(true);
    }
  }, [getRecipe.status]);
  return (
    <S.Recipe
      onClick={(e) => {
        getRecipe.mutate();
      }}
    >
      <S.Index>{i}.</S.Index>
      {title}
      <S.StyledLi>{children}</S.StyledLi>
      <S.MaterialOpenButton
        onClick={(e) => {
          e.stopPropagation();
          const newArray = [...isOpenList];
          newArray[index] = !newArray[index];
          setIsOpenList(newArray);
        }}
        isOpen={isOpenList[index]}
      />
      {isOpenList[index] && (
        <S.MaterialList>
          <div>
            재료 :{" "}
            <S.MaterialEmphasis>
              {data.ingredients.map((item) => item.name).join(", ")}
            </S.MaterialEmphasis>
          </div>
          <div>
            조미료 :{" "}
            <S.MaterialEmphasis>
              {data.seasonings.map((item) => item.name).join(", ")}
            </S.MaterialEmphasis>
          </div>
        </S.MaterialList>
      )}
    </S.Recipe>
  );
}

export default ChatResultRecipe;
