import React from "react";
import * as S from "./style";
import PostInput from "../PostInput";
import { useFieldArray, useFormContext } from "react-hook-form";
import PostAppendButton from "@/components/etc/Button/PostAppendButton";

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
      { name: "모짜렐라 치즈", quantity: "100g" },
      { name: "피망", quantity: "1개" },
      { name: "마늘", quantity: "2쪽" },
    ],
    seasonings: [
      { name: "굴소스", quantity: "3t" },
      { name: "고추장", quantity: "2T" },
      { name: "데리야끼소스", quantity: "3t" },
    ],
  };
  return (
    <S.PostMaterialInputs>
      <S.MaterialTitle>
        [{name === "ingredients" ? "기본" : "소스"}재료]
      </S.MaterialTitle>
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
                propertyName="quantity"
                placeholder={
                  index < 3 && `ex) ${placeholderList[name][index].quantity}`
                }
                control={control}
              />
              <S.DeleteIcon onClick={() => newField.remove(index)} />
            </S.Material>
          );
        })}
      </S.Materials>
      <PostAppendButton append={() => newField.append({})} />
    </S.PostMaterialInputs>
  );
}

export default PostMaterialInputs;
