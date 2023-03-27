import React from "react";
import LandingChat from "./LandingChat";
import LandingContents from "./LandingContents";
import LandingMain from "./LandingMain";
import LandingShare from "./LandingShare";

function Landing() {
  return (
    <>
      <LandingMain />
      <LandingChat />
      <LandingShare />
      <LandingContents />
    </>
  );
}

export default Landing;
