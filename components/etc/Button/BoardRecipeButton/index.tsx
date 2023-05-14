import React from "react";
import * as S from "./style";

function BoardRecipeButton({ children }: { children: string }) {
  return <S.BoardRecipeButton>{children}</S.BoardRecipeButton>;
}

export default BoardRecipeButton;
