import React from "react";
import * as S from "./style";

function DetailIngredient() {
  return (
    <>
      <S.DetailIngredients>
        <S.Title>재료</S.Title>
        <S.MainHr />
        <S.Ingredients>
          <S.Ingredient>
            <S.MiniTitle>기본재료</S.MiniTitle>
            <S.HrPad>
              <S.ServeHr />
            </S.HrPad>
            <div>
              <S.IngredientInfor>
                <S.IngredientName>돼지고기</S.IngredientName>
                <S.IngredientNum>1팩</S.IngredientNum>
              </S.IngredientInfor>
            </div>
          </S.Ingredient>
          <S.Ingredient>
            <S.MiniTitle>소스재료</S.MiniTitle>
            <S.HrPad>
              <S.ServeHr />
            </S.HrPad>
            <div>
              
            </div>
          </S.Ingredient>
        </S.Ingredients>
      </S.DetailIngredients>
    </>
  );
}

export default DetailIngredient;
