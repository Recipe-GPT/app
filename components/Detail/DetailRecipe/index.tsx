import React from "react";
import * as S from "./style";

function DetailRecipe({
  data,
}: {
  data: {
    recipe: string[];
    writer: string;
    createdDate: string;
  };
}) {
  return (
    <>
      <S.DetailRecipe>
        <S.Title>레시피</S.Title>
        <S.MainHr />
        <S.Recipe>
          {data.recipe.map((item: string, index: number) => {
            return (
              <S.RecipeStep>
                <S.RecipeTop>
                  <S.Step>step {index + 1}</S.Step>
                  <S.StepStory>{item}</S.StepStory>
                </S.RecipeTop>
                <S.RecipeHr />
              </S.RecipeStep>
            );
          })}
        </S.Recipe>
        <S.RecipeWriter>
          <S.Writer>{data.writer}</S.Writer>
          <S.Info>ᐧ</S.Info>
          <S.Writer>{data.createdDate}</S.Writer>
        </S.RecipeWriter>
      </S.DetailRecipe>
    </>
  );
}

export default DetailRecipe;
