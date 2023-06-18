import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { getRecipeMutation } from "@/utils/apis/recipe";
import {
  ChatListType,
  RecipeQuestionType,
  RecipeType,
} from "@/types/Chat/ChatList";
import { useRecoilState } from "recoil";
import { isLoadingState } from "@/atoms/Etc/isLoading";

function ChatResultInput({
  data,
  isScroll,
}: {
  data: RecipeType[];
  isScroll: boolean;
}) {
  const router = useRouter();
  const [materialInput, setMaterialInput] = useState<string>("");
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const {
    query: { recipeId },
  } = router;
  const selectedData = data[Number(materialInput) - 1];

  const getRecipe = getRecipeMutation(
    {
      name: selectedData?.name,
      description: selectedData?.description,
      ingredients: selectedData?.ingredients.map((item) => item.name),
      seasonings: selectedData?.seasonings.map((item) => item.name),
    },
    recipeId as string,
    selectedData?.id,
    // Number(materialInput),
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (materialInput) {
      getRecipe.mutate();
      // router.push(`/chat/${recipeId}/${materialInput}`);
    } else {
      e.preventDefault();
      router.replace(`/chat/${recipeId}`);
    }
  };

  useEffect(() => {
    if (getRecipe.isLoading) {
      setIsLoading(true);
    }
  }, [getRecipe.status]);

  return (
    <S.ChatInput isScroll={isScroll}>
      <S.InputWrap onSubmit={(e) => handleSubmit(e)}>
        <S.Input
          onChange={(e) => setMaterialInput(e.target.value)}
          value={materialInput}
        />
        <S.SendIcon type="submit" />
      </S.InputWrap>
    </S.ChatInput>
  );
}

export default ChatResultInput;
