import React from "react";
import Footer from "../etc/Footer";
import Header from "../etc/Header";
import * as S from "./style";
import DetailInfor from "./DetailInfor";
import DetailIngredient from "./DetailIngredient";
import DetailRecipe from "./DetailRecipe";

function Detail() {
  return (
    <>
      <S.Detail>
        <DetailInfor />
        <DetailIngredient />
        <DetailRecipe />
      </S.Detail>
    </>
  );
}

export default Detail;
