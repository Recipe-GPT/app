import React from "react";
import Footer from "../etc/Footer";
import Header from "../etc/Header";
import BoardWrap from "./BoardSection";
import * as S from "./style";

function Board() {
  return (
    <>
      <Header />
      <S.Board>
        <BoardWrap />
        <BoardWrap isYellow/>
      </S.Board>
      {/* <Footer /> */}
    </>
  );
}

export default Board;
