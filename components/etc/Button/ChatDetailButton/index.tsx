import React from "react";
import * as S from "./style";

function ChatDetailButton({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return <S.ChatDetailButton href={href}>{children}</S.ChatDetailButton>;
}

export default ChatDetailButton;
