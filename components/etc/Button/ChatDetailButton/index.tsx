import React from "react";
import * as S from "./style";

function ChatDetailButton({
  children,
  href,
  onClick,
}: {
  children: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <S.ChatDetailButton href={href} onClick={onClick}>
      {children}
    </S.ChatDetailButton>
  );
}

export default ChatDetailButton;
