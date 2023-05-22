import React from "react";
import * as S from "./style";

function ChatDetailMaterialTitle({ children }: { children: string }) {
  return (
    <S.ChatDetailMaterialTitle>
      <S.Text>{children}</S.Text>
      <S.Line />
    </S.ChatDetailMaterialTitle>
  );
}

export default ChatDetailMaterialTitle;
