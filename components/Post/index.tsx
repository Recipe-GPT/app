import React from "react";
import * as S from "./style";
import Header from "../etc/Header";
import Footer from "../etc/Footer";
import PostInfo from "./PostInfo";
import PostMaterial from "./PostMaterial";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

function Post() {
  const methods = useForm({
    defaultValues: {
      ingredients: [{}, {}, {}],
      seasonings: [{}, {}, {}],
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
          </S.Post>
          <input type="submit" />
        </form>
      </FormProvider>
      {/* <Footer /> */}
    </>
  );
}

export default Post;
