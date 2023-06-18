import React from "react";
import * as S from "./style";
import Header from "../etc/Header";
import Footer from "../etc/Footer";
import PostInfo from "./PostInfo";
import PostMaterial from "./PostMaterial";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import PostRecipe from "./PostRecipe";
import { useRecoilValue } from "recoil";
import { PostInfoOptionState } from "@/atoms/Post/PostInfoOption";
import { postBoardMutation } from "@/utils/apis/board";

function Post() {
  const formData = new FormData();
  const options = useRecoilValue(PostInfoOptionState);
  const methods = useForm({
    defaultValues: {
      ingredients: [{}, {}, {}],
      seasonings: [{}, {}, {}],
      recipe: [{}, {}, {}],
    },
  });
  const postBoardFunc = postBoardMutation(formData);
  const onSubmit = (data: FieldValues) => {
    const { difficulty, serving, time } = options;
    const { image, name, description, ingredients, seasonings, recipe } = data;
    formData.append("image", image[0]);
    formData.append(
      "rq",
      new Blob(
        [
          JSON.stringify({
            difficulty,
            serving,
            time,
            recipe: {
              name,
              description,
              ingredients,
              seasonings,
              recipe: recipe.map((item: { value: string }) => item.value),
            },
          }),
        ],
        {
          type: "application/json",
        },
      ),
    );
    postBoardFunc.mutate();
  };
  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <S.Post onSubmit={methods.handleSubmit(onSubmit)}>
          <PostInfo />
          <PostMaterial />
          <PostRecipe />
          <S.Submit value="레시피 업로드하기" type="submit" />
        </S.Post>
      </FormProvider>
      <Footer />
    </>
  );
}

export default Post;
