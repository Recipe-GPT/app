import React from "react";
import Header from "../etc/Header";
import LandingChat from "./LandingChat";
import LandingContents from "./LandingContents";
import LandingMain from "./LandingMain";
import LandingShare from "./LandingShare";
import * as S from "./style";

function Landing() {
  return (
    <S.Landing>
      <Header />
      <LandingMain />
      <LandingChat />
      <LandingShare />
      <LandingContents />
    </S.Landing>
  );
}

export default Landing;
