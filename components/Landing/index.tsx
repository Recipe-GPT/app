import React from "react";
import LandingChat from "./LandingChat";
import LandingContents from "./LandingContents";
import LandingMain from "./LandingMain";

function Landing() {
  return (
    <>
      <LandingMain />
      <LandingChat />
      <LandingMain />
      <LandingContents />
    </>
  );
}

export default Landing;
