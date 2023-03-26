import React from "react";
import * as S from "./style";
import { HiChevronRight } from "react-icons/hi";

function RecipeButton({ children }: { children: string }) {
  return (
    <S.RecipeButton>
      {children}
      <HiChevronRight size={40}/>
    </S.RecipeButton>
  );
}

export default RecipeButton;
