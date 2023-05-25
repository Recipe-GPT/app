import React from "react";
import * as S from "./style";

function DetailRecipe() {
  return (
    <>
      <S.DetailRecipe>
        <S.Title>레시피</S.Title>
        <S.MainHr />
        <S.Recipe>
          <S.RecipeStep>
            <S.RecipeTop>
              <S.Step>step 1</S.Step>
              <S.StepStory>먹기좋게~</S.StepStory>
            </S.RecipeTop>
            <S.RecipeHr/>
          </S.RecipeStep>
        </S.Recipe>
        <S.RecipeWriter>
          <S.Writer>작성자</S.Writer>
          <S.Info>ᐧ</S.Info>
          <S.Writer>2022.03.05</S.Writer>
        </S.RecipeWriter>
      </S.DetailRecipe>
    </>
  );
}

export default DetailRecipe;
