import React from "react";
import Footer from "../etc/Footer";
import Header from "../etc/Header";
import BoardSection from "./BoardSection";
import * as S from "./style";
import BoardMainSection from "./BoardMainSection";

function Board() {
  return (
    <>
      <Header />
      <S.Board>
        <BoardSection />
        <BoardSection isYellow />
        <BoardMainSection />
      </S.Board>
      {/* <Footer /> */}
    </>
  );
}

export default Board;
