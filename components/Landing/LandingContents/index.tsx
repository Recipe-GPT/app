import RecipeButton from "@/components/etc/Button/RecipeButton";
import React from "react";
import * as S from "./style";

function LandingContents() {
  return (
    <>
      <S.LandingContents>
        <S.MainWrapper>
          <S.Title>Recipe GPT</S.Title>
          <div>
            <S.Description>가지고 있는 재료로</S.Description>
            <S.Description>요리할 수 있는 레시피를</S.Description>
            <S.Description>확인해보세요!</S.Description>
          </div>
          <RecipeButton>레시피 확인하기</RecipeButton>
        </S.MainWrapper>
        <S.Fryfan
          src="./images/frypan.svg"
          alt="프라이팬 사진"
          width={650}
          height={650}
        />
      </S.LandingContents>
    </>
  );
}

export default LandingContents;
