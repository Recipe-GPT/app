import React from "react";
import * as S from "./style";

function GoToTopButton({ isScroll }: { isScroll: boolean }) {
  return (
    <S.GoToTopButton isScroll={isScroll} onClick={() => window.scrollTo(0, 0)}>
      <S.GoToTopIcon />
    </S.GoToTopButton>
  );
}

export default GoToTopButton;
