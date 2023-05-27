import React from "react";
import * as S from "./style";
import PostTitle from "../PostTitle";
import { useFieldArray, useFormContext } from "react-hook-form";
import PostAppendButton from "@/components/etc/Button/PostAppendButton";
import PostInput from "../PostInput";

function PostRecipe() {
  const { control } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "recipe",
  });
  return (
    <S.PostRecipe>
      <PostTitle title="레시피">음식 조리법을 입력해주세요.</PostTitle>
      <S.RecipeInputWrap>
        {fields.map((field, index) => {
          return (
            <S.RecipeInput key={field.id}>
              <S.Step>step {index + 1}</S.Step>
              <PostInput
                name="recipe"
                width="100%"
                index={index}
                propertyName="value"
                placeholder="ex) 후라이팬에 돼기고기와 소고기를 넣고 볶아주세요."
                control={control}
              />
              <S.DeleteIcon onClick={() => remove(index)} />
            </S.RecipeInput>
          );
        })}
        <PostAppendButton append={() => append({})} />
      </S.RecipeInputWrap>
    </S.PostRecipe>
  );
}

export default PostRecipe;
