import React from "react";
import * as S from "./style";
import Header from "../etc/Header";
import Footer from "../etc/Footer";
import PostInfo from "./PostInfo";
import PostMaterial from "./PostMaterial";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import PostRecipe from "./PostRecipe";

function Post() {
  const methods = useForm({
    defaultValues: {
      ingredients: [{}, {}, {}],
      seasonings: [{}, {}, {}],
      recipe: [{}, {}, {}],
    },
  });
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <S.Post>
            <PostInfo />
            <PostMaterial />
            <PostRecipe />
            <input type="submit" />
          </S.Post>
        </form>
      </FormProvider>
      {/* <Footer /> */}
    </>
  );
}

export default Post;
