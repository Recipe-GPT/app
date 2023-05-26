import React from "react";
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
  const seasoningsField = useFieldArray({
    control,
    name: "seasonings",
  });

  const placeholderList = {
    ingredient: [
      { name: "모짜렐라 치즈", count: "100g" },
      { name: "피망", count: "1개" },
      { name: "마늘", count: "2쪽" },
    ],
    seasoning: [
      { name: "굴소스", count: "3t" },
      { name: "고추장", count: "2T" },
      { name: "데리야끼소스", count: "3t" },
    ],
  };
  return (
    <S.PostMaterial>
      <PostTitle title="재료">정확한 계량정보를 입력해주세요.</PostTitle>
      <S.MaterialContainer>
        <S.MaterialWrap>
          <S.MaterialTitle>[기본재료]</S.MaterialTitle>
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
          <S.AddButton onClick={() => ingredientsField.append({})}>
            <S.AddIcon />
            추가
          </S.AddButton>
        </S.MaterialWrap>
        <S.MaterialWrap>
          <S.MaterialTitle>[소스재료]</S.MaterialTitle>
          <S.Materials>
            {seasoningsField.fields.map((field, index) => {
              return (
                <S.Material key={field.id}>
                  <PostInput
                    width="calc(50% - 5px)"
                    name="seasonings"
                    index={index}
                    propertyName="name"
                    placeholder={
                      index < 3 &&
                      `ex) ${placeholderList.seasoning[index].name}`
                    }
                    control={control}
                  />
                  <PostInput
                    width="calc(50% - 5px)"
                    name="seasonings"
                    index={index}
                    propertyName="count"
                    placeholder={
                      index < 3 &&
                      `ex) ${placeholderList.seasoning[index].count}`
                    }
                    control={control}
                  />
                </S.Material>
              );
            })}
          </S.Materials>
          <S.AddButton onClick={() => seasoningsField.append({})}>
            <S.AddIcon />
            추가
          </S.AddButton>
        </S.MaterialWrap>
      </S.MaterialContainer>
    </S.PostMaterial>
  );
}

export default PostMaterial;
