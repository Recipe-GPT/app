import React, { useState } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { MaterialStatusState } from "@/store/atoms/MaterialStatus";

type MaterialStatusType = "SEASONING" | "INGREDIENT";

function ChatInput() {
  const [materialStatus, setMaterialStatus] =
    useRecoilState<MaterialStatusType>(MaterialStatusState);
  const [materialInput, setMaterialInput] = useState<string>("");

  const handleSubmit = () => {
    console.log(materialInput);
    setMaterialInput("");
  };

  return (
    <S.ChatInput>
      <S.ChangingStatusWrap>
        <S.ChangingStatus
          isActive={materialStatus === "INGREDIENT"}
          onClick={() => setMaterialStatus("INGREDIENT")}
        >
          재료
        </S.ChangingStatus>
        <S.ChangingStatus
          isActive={materialStatus === "SEASONING"}
          onClick={() => setMaterialStatus("SEASONING")}
        >
          조미료
        </S.ChangingStatus>
      </S.ChangingStatusWrap>
      <S.InputWrap>
        <S.Input
          placeholder={`${
            materialStatus === "INGREDIENT" ? "재" : "조미"
          }료 추가 입력 (콤마로 여러개 입력 구분) (입력이 비어있는 상태에서 엔터 누를 시 요리 추천기능 작동)`}
          onChange={(e) => setMaterialInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          value={materialInput}
        />
        <S.SendIcon onClick={() => handleSubmit()} />
      </S.InputWrap>
    </S.ChatInput>
  );
}

export default ChatInput;
