import React, { useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { MaterialStatusState } from "@/atoms/Chat/MaterialStatus";
import { MaterialListState } from "@/atoms/Chat/MaterialList";
import { MaterialStatusType } from "@/types/Chat/MaterialStatusType";

function ChatDetailInput() {
  const router = useRouter();
  const [materialInput, setMaterialInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (materialInput) {
      router.push(`/chat/1/${materialInput}`);
    } else {
      e.preventDefault();
      router.push("/chat/1");
    }
  };

  return (
    <S.ChatInput>
      <S.InputWrap onSubmit={(e) => handleSubmit(e)}>
        <S.Input
          onChange={(e) => setMaterialInput(e.target.value)}
          value={materialInput}
        />
        <S.SendIcon type="submit" />
      </S.InputWrap>
    </S.ChatInput>
  );
}

export default ChatDetailInput;
