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
    },
  });
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <>
      <Header />
      <S.Post>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PostInfo />
            <PostMaterial />
            <input type="submit" />
          </form>
        </FormProvider>
      </S.Post>
      {/* <Footer /> */}
    </>
  );
}

export default Post;
