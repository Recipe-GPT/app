import React from "react";
import * as S from "./style";
import { FieldArrayMethodProps } from "react-hook-form";

function PostAppendButton({
  append,
}: {
  append: (value: unknown, options?: FieldArrayMethodProps | undefined) => void;
}) {
  return (
    <S.PostAppendButton onClick={append}>
      <S.AddIcon />
      추가
    </S.PostAppendButton>
  );
}

export default PostAppendButton;
