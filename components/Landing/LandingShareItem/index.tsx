import React from "react";
import * as S from "./style";

function LandingShareItem({ index }: { index: number }) {
  return (
    <>
      <S.LandingShareItem index={index}>
        <S.FoodImage
          src={`./images/Food${index + 1}.svg`}
          alt="음식 사진"
          width={248}
          height={248}
        />
        <S.ItemWrapper>
          <S.ItemContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </S.ItemContent>
          <S.ItemInfo>
            <S.ItemNickname>nickname</S.ItemNickname>
            <S.ItemDate> ᐧ 2023-02-03</S.ItemDate>
          </S.ItemInfo>
        </S.ItemWrapper>
      </S.LandingShareItem>
    </>
  );
}

export default LandingShareItem;
