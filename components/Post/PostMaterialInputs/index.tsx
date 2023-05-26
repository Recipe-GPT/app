import React from "react";
import * as S from "./style";
import PostInput from "../PostInput";
import { useFieldArray, useFormContext } from "react-hook-form";
import { MdClear } from "react-icons/md";

function PostMaterialInputs({ name }: { name: "ingredients" | "seasonings" }) {
  const { control } = useFormContext();
  const ingredientsField = useFieldArray({
    control,
    name: "ingredients",
  });
  const seasoningsField = useFieldArray({
    control,
    name: "seasonings",
  });

  const newField = name === "ingredients" ? ingredientsField : seasoningsField;

  const placeholderList = {
    ingredients: [
      { name: "모짜렐라 치즈", count: "100g" },
      { name: "피망", count: "1개" },
      { name: "마늘", count: "2쪽" },
    ],
    seasonings: [
      { name: "굴소스", count: "3t" },
      { name: "고추장", count: "2T" },
      { name: "데리야끼소스", count: "3t" },
    ],
  };
  return (
    <S.PostMaterialInputs>
      <S.MaterialTitle>[기본재료]</S.MaterialTitle>
      <S.Materials>
        {newField.fields.map((field, index) => {
          return (
            <S.Material key={field.id}>
              <PostInput
                width="calc(50% - 5px)"
                name={name}
                index={index}
                propertyName="name"
                placeholder={
                  index < 3 && `ex) ${placeholderList[name][index].name}`
                }
                control={control}
              />
              <PostInput
                width="calc(50% - 5px)"
                name={name}
                index={index}
                propertyName="count"
                placeholder={
                  index < 3 && `ex) ${placeholderList[name][index].count}`
                }
                control={control}
              />
              <MdClear />
            </S.Material>
          );
        })}
      </S.Materials>
      <S.AddButton onClick={() => newField.append({})}>
        <S.AddIcon />
        추가
      </S.AddButton>
    </S.PostMaterialInputs>
  );
}

export default PostMaterialInputs;
