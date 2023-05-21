import React from "react";
import * as S from "./style";

function ChatDetailRecipeStep({
  index,
  children,
}: {
  index: number;
  children: string;
}) {
  return (
    <S.ChatDetailRecipeStep>
      <S.Step>
        step <S.StepCount>{index}</S.StepCount>
      </S.Step>
      <S.Children>{children}</S.Children>
    </S.ChatDetailRecipeStep>
  );
}

export default ChatDetailRecipeStep;
