import React from "react";
import Header from "../etc/Header";
import LandingIntro from "./LandingIntro";
import LandingQuery from "./LandingQuery";
import LandingReview from "./LandingReview";
import * as S from "./style";
import Footer from "../etc/Footer";

function Landing() {
  return (
    <S.Landing>
      <LandingIntro />
      <LandingQuery />
      <LandingReview />
    </S.Landing>
  );
}

export default Landing;
