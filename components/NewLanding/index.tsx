import React from "react";
import Header from "../etc/Header";
import LandingIntro from "./LandingIntro";
import LandingQuery from "./LandingQuery";
import * as S from "./style";

function Landing() {
  return (
    <S.Landing>
      <Header />
      <LandingIntro />
      <LandingQuery />
    </S.Landing>
  );
}

export default Landing;
