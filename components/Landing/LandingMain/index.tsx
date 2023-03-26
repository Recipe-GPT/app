import Image from "next/image";
import React from "react";
import * as S from "./style";

function LandingMain() {
  return (
    <>
      <S.MainBackground>
        <S.MainBackgroundImage
          alt="메인 화면 디자인 사진"
          src="./images/MainBackground.svg"
          fill
        />
      </S.MainBackground>
    </>
  );
}

export default LandingMain;
