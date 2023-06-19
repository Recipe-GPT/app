import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { useFormContext } from "react-hook-form";
import Image from "next/image";

function PostImageInput() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { register, watch } = useFormContext();
  const [imagePreview, setImagePreview] = useState("");
  const [isHoverImage, setIsHoverImage] = useState(false);

  const image = watch("image");

  const { ref, ...rest } = register("image", { required: true });

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <>
      {imagePreview ? (
        <S.ImageWrap>
          {isHoverImage && (
            <S.ReUploadWrap
              onClick={() => fileRef.current?.click()}
              onMouseLeave={() => setIsHoverImage((prev) => !prev)}
            >
              <S.ReUpload />
              <S.ReUploadText>이미지 재업로드</S.ReUploadText>
            </S.ReUploadWrap>
          )}
          <S.ImagePreview
            src={imagePreview}
            alt="asdf"
            width={300}
            height={300}
            onMouseOver={() => setIsHoverImage((prev) => !prev)}
          />
        </S.ImageWrap>
      ) : (
        <S.PostImageInput onClick={() => fileRef.current?.click()}>
          <S.Camera />
          <S.ImageText>음식 사진을 업로드 해주세요.</S.ImageText>
        </S.PostImageInput>
      )}
      <S.HiddenInput
        type="file"
        accept="image/*"
        {...rest}
        ref={(e) => {
          ref(e);
          fileRef.current = e;
        }}
      />
    </>
  );
}

export default PostImageInput;
