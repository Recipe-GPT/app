import React, { useEffect, useState } from "react";
import * as S from "./style";
import PostTitle from "../PostTitle";
import PostInput from "../PostInput";
import { useFieldArray, useFormContext } from "react-hook-form";

function PostMaterial() {
  const { control } = useFormContext();
  const ingredientsField = useFieldArray({
    control,
    name: "ingredients",
  });

  const placeholderList = {
    ingredient: [
      { name: "모짜렐라 치즈", count: "100g" },
      { name: "피망", count: "1개" },
      { name: "마늘", count: "2쪽" },
    ],
    seasoning: 3,
  };
  return (
    <S.PostMaterial>
      <PostTitle title="재료">정확한 계량정보를 입력해주세요.</PostTitle>
      <S.MaterialContainer>
        <S.MaterialWrap>
          [기본재료]
          <S.Materials>
            {ingredientsField.fields.map((field, index) => {
              return (
                <S.Material key={field.id}>
                  <PostInput
                    width="calc(50% - 5px)"
                    name="ingredients"
                    index={index}
                    propertyName="name"
                    placeholder={
                      index < 3 &&
                      `ex) ${placeholderList.ingredient[index].name}`
                    }
                    control={control}
                  />
                  <PostInput
                    width="calc(50% - 5px)"
                    name="ingredients"
                    index={index}
                    propertyName="count"
                    placeholder={
                      index < 3 &&
                      `ex) ${placeholderList.ingredient[index].count}`
                    }
                    control={control}
                  />
                </S.Material>
              );
            })}
          </S.Materials>
          <button onClick={() => ingredientsField.append({})}>추가</button>
        </S.MaterialWrap>
        <S.MaterialWrap>[소스재료]</S.MaterialWrap>
      </S.MaterialContainer>
    </S.PostMaterial>
  );
}

export default PostMaterial;
