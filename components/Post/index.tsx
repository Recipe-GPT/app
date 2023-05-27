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

function Post() {
  const options = useRecoilValue(PostInfoOptionState);
  const methods = useForm({
    defaultValues: {
      ingredients: [{}, {}, {}],
      seasonings: [{}, {}, {}],
      recipe: [{}, {}, {}],
    },
  });
  const onSubmit = (data: FieldValues) => {
    console.log({ ...data, ...options });
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
