import React from "react";
import * as S from "./style";
import { MaterialType } from "@/types/Chat/ChatList";
function DetailIngredient({
  data,
}: {
  data: { ingredients: MaterialType[]; seasonings: MaterialType[] };
}) {
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
              {data.ingredients.map((item: MaterialType) => {
                return (
                  <S.IngredientInfor>
                    <S.IngredientName>{item.name}</S.IngredientName>
                    <S.IngredientNum>{item.quantity ?? ""}</S.IngredientNum>
                  </S.IngredientInfor>
                );
              })}
            </div>
          </S.Ingredient>
          <S.Ingredient>
            <S.MiniTitle>소스재료</S.MiniTitle>
            <S.HrPad>
              <S.ServeHr />
            </S.HrPad>
            <div>
              {data.seasonings.map((item: MaterialType) => {
                return (
                  <S.IngredientInfor>
                    <S.IngredientName>{item.name}</S.IngredientName>
                    <S.IngredientNum>{item.quantity ?? ""}</S.IngredientNum>
                  </S.IngredientInfor>
                );
              })}
            </div>
          </S.Ingredient>
        </S.Ingredients>
      </S.DetailIngredients>
    </>
  );
}

export default DetailIngredient;
