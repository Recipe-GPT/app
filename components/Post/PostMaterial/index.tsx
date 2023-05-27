import React from "react";
import * as S from "./style";
import PostTitle from "../PostTitle";
import PostMaterialInputs from "../PostMaterialInputs";

function PostMaterial() {
  return (
    <S.PostMaterial>
      <PostTitle title="재료">정확한 계량정보를 입력해주세요.</PostTitle>
      <S.MaterialContainer>
        <PostMaterialInputs name="ingredients" />
        <PostMaterialInputs name="seasonings" />
      </S.MaterialContainer>
    </S.PostMaterial>
  );
}

export default PostMaterial;
