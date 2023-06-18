import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { MaterialStatusState } from "@/atoms/Chat/MaterialStatus";
import { MaterialListState } from "@/atoms/Chat/MaterialList";
import { MaterialStatusType } from "@/types/Chat/MaterialStatusType";
import { getRecommendMutation } from "@/utils/apis/recipe";
import {
  getIngredientListMutation,
  getSeasoningListMutation,
} from "@/utils/apis/search";
import { isLoadingState } from "@/atoms/Etc/isLoading";

function ChatInput() {
  const router = useRouter();
  const [materialStatus, setMaterialStatus] =
    useRecoilState<MaterialStatusType>(MaterialStatusState);
  const [materialInput, setMaterialInput] = useState<string>("");
  const [materialList, setMaterialList] = useRecoilState(MaterialListState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  const {
    query: { recipeId },
  } = router;

  const recommendMutation = getRecommendMutation(
    {
      ingredients: materialList.INGREDIENT.map((item) => item.name),
      seasonings: materialList.SEASONING.map((item) => item.name),
    },
    recipeId as string,
  );

  useEffect(() => {
    if (recommendMutation.isLoading) {
      setIsLoading(true);
    }
  }, [recommendMutation.status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (materialInput) {
      if (
        materialList[materialStatus].some(
          (material) => material.name === materialInput,
        )
      ) {
        setMaterialInput("");
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
      recommendMutation.mutate();
    }
  };

  const ingredientListMutation = getIngredientListMutation(materialInput);
  const seasoningListMutation = getSeasoningListMutation(materialInput);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterialInput(e.target.value);
    materialStatus === "INGREDIENT"
      ? ingredientListMutation.mutate()
      : seasoningListMutation.mutate();
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
      <S.InputWrap onSubmit={(e) => handleSubmit(e)}>
        <S.Input
          placeholder={`${
            materialStatus === "INGREDIENT" ? "재료" : "조미료"
          } 추가 입력`}
          onChange={(e) => search(e)}
          value={materialInput}
        />
        {!materialInput && (
          <S.Placeholder>Enter로 요리 추천 시작</S.Placeholder>
        )}
        <S.SendIcon type="submit" />
      </S.InputWrap>
    </S.ChatInput>
  );
}

export default ChatInput;
