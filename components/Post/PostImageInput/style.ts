import Image from "next/image";
import { MdCameraAlt } from "react-icons/md";
import styled, { keyframes } from "styled-components";

export const PostImageInput = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.color.grey600};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
`;

export const Camera = styled(MdCameraAlt)`
  width: 125px;
  height: 125px;
  color: ${({ theme }) => theme.color.grey800};
`;

export const ImageText = styled.span`
  color: ${({ theme }) => theme.color.grey900};
  font-size: 1.25rem;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImagePreview = styled(Image)`
  border-radius: 15px;
  object-fit: cover;
  display: block;
  /* &:hover {
    transform: scale(1.1);
  } */
`;

export const ImageWrap = styled.div`
  /* &:hover {
    transform: scale(1.1);
  } */
`;

const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ReUploadWrap = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  animation: ${Fade} 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    & > img {
      transform: scale(1.1);
    }
  }
`;

export const ReUpload = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.grey800};
  opacity: 0.5;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReUploadText = styled(ImageText)`
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  font-weight: bold;
`;
