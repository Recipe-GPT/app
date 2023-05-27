import React from "react";
import * as S from "./style";
import PostTitle from "../PostTitle";
import PostInput from "../PostInput";
import { MdCameraAlt, MdPeople } from "react-icons/md";
import { IoAlarmOutline } from "react-icons/io5";
import { StarRounded } from "@mui/icons-material";
import PostInfoOption from "../PostInfoOption";
import { useRecoilState } from "recoil";
import { PostInfoOptionState } from "@/atoms/Post/PostInfoOption";

function PostInfo() {
  const [options, setOptions] = useRecoilState(PostInfoOptionState);
  const { portion, time, difficulty } = options;
  const upPortion = () => {
    setOptions((prev) => ({ ...prev, portion: prev.portion + 1 }));
  };

  const downPortion = () => {
    if (portion === 1) {
      return;
    }
    setOptions((prev) => ({ ...prev, portion: prev.portion - 1 }));
  };

  const upTime = () => {
    setOptions((prev) => ({ ...prev, time: prev.time + 60 }));
  };

  const downTime = () => {
    if (time === 0) {
      return;
    }
    setOptions((prev) => ({ ...prev, time: prev.time - 60 }));
  };

  return (
    <S.PostInfo>
      <S.ContentWrap>
        <PostTitle title="정보">레시피의 기본정보를 입력해주세요.</PostTitle>
        <S.InputWrap>
          <PostInput placeholder="제목" isBig width="300px" name="name" />
          <PostInput placeholder="음식 설명" name="description" />
        </S.InputWrap>
        <S.OptionWrap>
          <PostInfoOption
            icon={<MdPeople />}
            value="portion"
            up={upPortion}
            down={downPortion}
          >
            레시피의 기준이 되는 인분을 입력하세요.
          </PostInfoOption>
          <PostInfoOption
            icon={<IoAlarmOutline />}
            value="time"
            up={upTime}
            down={downTime}
          >
            레시피대로 요리 시 소요시간을 입력하세요.
          </PostInfoOption>
          <PostInfoOption icon={<StarRounded />} value="difficulty">
            레시피의 난이도를 입력하세요.
          </PostInfoOption>
        </S.OptionWrap>
        <S.ExtraInfoWrap>
          <span>정승민</span>
          <span>·</span>
          <span>2022-05-09</span>
        </S.ExtraInfoWrap>
      </S.ContentWrap>
      <S.ImageWrap>
        <S.ImageTitle>[음식 사진]</S.ImageTitle>
        <S.ImagePlaceholder>
          <S.Camera />
          <S.ImageText>음식 사진을 업로드 해주세요.</S.ImageText>
        </S.ImagePlaceholder>
      </S.ImageWrap>
    </S.PostInfo>
  );
}

export default PostInfo;