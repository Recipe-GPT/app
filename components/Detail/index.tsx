import React from "react";
import * as S from "./style";
import DetailInfor from "./DetailInfor";
import DetailIngredient from "./DetailIngredient";
import DetailRecipe from "./DetailRecipe";
import { useRouter } from "next/router";
import { getDetailBoardQuery } from "@/utils/apis/board";

function Detail() {
  const router = useRouter();

  const {
    query: { boardId },
  } = router;

  const { data, isSuccess } = getDetailBoardQuery(
    boardId as string,
    router.isReady,
  );
  return (
    <>
      {isSuccess && (
        <S.Detail>
          <DetailInfor
            data={{
              name: data.name,
              description: data.description,
              imageUrl: data.imageUrl,
              difficulty: data.difficulty,
              time: data.time,
              serving: data.serving,
            }}
          />
          <DetailIngredient
            data={{
              ingredients: data.recipe.ingredients,
              seasonings: data.recipe.seasonings,
            }}
          />
          <DetailRecipe
            data={{
              recipe: data.recipe.recipe,
              writer: data.writer,
              createdDate: data.createdDate,
            }}
          />
        </S.Detail>
      )}
    </>
  );
}

export default Detail;
