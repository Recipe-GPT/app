import React, { useState } from "react";
import * as S from "./style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MaterialStatusState } from "@/atoms/Chat/MaterialStatus";
import { MaterialListState } from "@/atoms/Chat/MaterialList";
import { MaterialStatusType } from "@/types/Chat/MaterialStatusType";

function ChatInput() {
  const [materialStatus, setMaterialStatus] =
    useRecoilState<MaterialStatusType>(MaterialStatusState);
  const [materialInput, setMaterialInput] = useState<string>("");
  const setMaterialList = useSetRecoilState(MaterialListState);

  const handleSubmit = () => {
    if (materialInput) {
      setMaterialList((prev) => ({
        ...prev,
        [materialStatus]: [
          ...prev[materialStatus],
          { name: materialInput, isHover: false },
        ],
      }));
      setMaterialInput("");
    } else {
      console.log("🫃");
    }
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
          }료 추가 입력`}
          onChange={(e) => setMaterialInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          value={materialInput}
        />
        {!materialInput && (
          <S.Placeholder>Enter로 요리 추천 시작</S.Placeholder>
        )}
        <S.SendIcon onClick={() => handleSubmit()} />
      </S.InputWrap>
    </S.ChatInput>
  );
}

export default ChatInput;
