import React, { useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { MaterialStatusState } from "@/atoms/Chat/MaterialStatus";
import { MaterialListState } from "@/atoms/Chat/MaterialList";
import { MaterialStatusType } from "@/types/Chat/MaterialStatusType";

function ChatDetailInput() {
  const router = useRouter();
  const [materialStatus, setMaterialStatus] =
    useRecoilState<MaterialStatusType>(MaterialStatusState);
  const [materialInput, setMaterialInput] = useState<string>("");
  const [materialList, setMaterialList] = useRecoilState(MaterialListState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (materialInput) {
      if (
        materialList[materialStatus].some(
          (material) => material.name === materialInput,
        )
      ) {
        setMaterialInput("");
        console.log("중복임 ㅋㅋ");
        return;
      }
      setMaterialList((prev) => ({
        ...prev,
        [materialStatus]: [
          ...prev[materialStatus],
          { name: materialInput, isHover: false },
        ],
      }));
      setMaterialInput("");
    } else {
      console.log(
        materialList["INGREDIENT"].map((item) => item.name).join(","),
      );
      // router.push("/chat/1");
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
