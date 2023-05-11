import React from "react";
import * as S from "./style";

function LandingQuery() {
  return (
    <S.LandingQuery>
      <S.LandingQue>
        <S.QueryLeft>
          <div>
            <S.QueryMent>언제 어디서든,</S.QueryMent>
            <S.QueryMent>질문해보세요.</S.QueryMent>
          </div>
          <S.QueryLeftMid>
            <S.QueryMidMent>남은 재료로 만들 수 있는</S.QueryMidMent>
            <S.QueryMidMent>
              다양한 레시피를 Gpt와 함께 알아보세요!
            </S.QueryMidMent>
          </S.QueryLeftMid>
          <S.QueryLeftBottom>지금 질문하러 가기 ▸</S.QueryLeftBottom>
        </S.QueryLeft>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.LandingQue>
    </S.LandingQuery>
  );
}

export default LandingQuery;
