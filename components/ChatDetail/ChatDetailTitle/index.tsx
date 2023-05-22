import React from "react";
import * as S from "./style";

function ChatDetailTitle({ children }: { children: string }) {
  return (
    <S.ChatDetailTitle>
      <S.Text>{children}</S.Text>
      <S.Line/>
    </S.ChatDetailTitle>
  );
}

export default ChatDetailTitle;
