import React from "react";
import * as S from "./style";

function ChatInput() {
  return (
    <S.ChatInput> 
      <S.InputWrap>
        <S.Input placeholder="재료 추가 입력 (콤마로 여러개 입력 구분) (입력이 비어있는 상태에서 엔터 누를 시 요리 추천기능 작동)" />
        <S.SendIcon />
      </S.InputWrap>
    </S.ChatInput>
  );
}

export default ChatInput;
