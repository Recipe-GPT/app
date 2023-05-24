import React from "react";
import * as S from "./style";
import Header from "../etc/Header";
import Footer from "../etc/Footer";
import PostInfo from "./PostInfo";

function Post() {
  return (
    <>
      <Header />
      <S.Post>
        <PostInfo />
      </S.Post>
      {/* <Footer /> */}
    </>
  );
}

export default Post;
