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
        <S.QueryRight>
          <S.Question>
            <S.QuestionMe>
              돼지고기, 당근, 마늘, 김치가 남았는데<br/> 이걸로 만들 수 있는 음식이
              있을까?
            </S.QuestionMe>
            <S.QueryProfile
              src="https://i.pinimg.com/564x/cd/d2/d4/cdd2d458ea81f0de645890a63213e22d.jpg"
              width={50}
              height={50}
            />
          </S.Question>
          <S.QuestionY>
            <S.QueryProfileY
              src="./images/GPTIcon2.svg"
              width={50}
              height={50}
            />
            <S.QuestionGpt>
              네, 돼지고기 김치찌개나 김치볶음밥,
              <br /> 당근 조림 중 하나는 어떠세요?
              <br />
              원하는 레시피가 있다면 말씀해주세요.
            </S.QuestionGpt>
          </S.QuestionY>
          <S.Question>
              <S.QuestionMe>
                오늘은 김치볶음밥이 땡기네!
                <br /> 맛있는 김치볶음밥 레시피 알려줘
              </S.QuestionMe>
            <S.QueryProfile
              src="https://i.pinimg.com/564x/cd/d2/d4/cdd2d458ea81f0de645890a63213e22d.jpg"
              width={50}
              height={50}
            />
          </S.Question>
        </S.QueryRight>
      </S.LandingQue>
    </S.LandingQuery>
  );
}

export default LandingQuery;
