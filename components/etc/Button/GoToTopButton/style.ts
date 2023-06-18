import { MdKeyboardArrowUp } from "react-icons/md";
import styled, { keyframes } from "styled-components";

export const GoToTopButton = styled.button<{ isScroll: boolean }>`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border: none;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  visibility: ${({ isScroll }) => (isScroll ? "visible" : "hidden")};
  transition: 0.3s;
  animation: ${({ isScroll, theme }) =>
      isScroll ? theme.animations.FadeIn : theme.animations.FadeOut}
    ease-in-out 0.3s forwards;
`;

export const GoToTopIcon = styled(MdKeyboardArrowUp)`
  width: 3rem;
  height: 3rem;
`;
