import React from "react";
import Header from "../etc/Header";
import LandingIntro from "./LandingIntro";
import * as S from "./style";

function Landing() {
  return (
    <S.Landing>
      <Header />
      <LandingIntro/>
    </S.Landing>
  );
}

export default Landing;

