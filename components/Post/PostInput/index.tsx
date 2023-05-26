import React from "react";
import * as S from "./style";
import { useFormContext, Controller } from "react-hook-form";

function PostInput({ ...props }) {
  const { register } = useFormContext();
  const { control, name, index, propertyName } = props;
  return (
    <>
      {control ? (
        <Controller
          control={control}
          name={`${name}.${index}.${propertyName}`}
          render={({ field }) => <S.PostInput {...props} {...field} />}
        />
      ) : (
        <S.PostInput {...props} {...register(name)} />
      )}
    </>
  );
}

export default PostInput;
