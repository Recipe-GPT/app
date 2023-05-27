import React from "react";
import * as S from "./style";

interface ChatDetailRecipeStepType {
  index: number;
  children: string;
}

function ChatDetailRecipeStep({ index, children }: ChatDetailRecipeStepType) {
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
