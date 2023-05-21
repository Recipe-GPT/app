import Image from "next/image";
import styled, { css } from "styled-components";
import Link from "next/link";

export const Header = styled.header<{ isGrey?: true }>`
  width: 100%;
  padding: 0 50px;
  position: ${({ isGrey }) => (isGrey ? "fixed" : "absolute")};
  height: 5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isGrey, theme }) => isGrey && theme.color.lightGrey};
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;

export const NavItem = styled(Link)<{ pageName: string; pathName?: string }>`
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  ${({ pageName }) => {
    switch (pageName) {
      case "/":
        return css`
          color: ${({ theme }) => theme.color.lightGrey} !important;
          border-bottom: ${({ theme, pathName }) =>
            pageName === pathName && `2px solid ${theme.color.lightGrey}`};
        `;
      case "/chat":
      case "/chat/[recipeId]":
        return css`
          color: ${({ theme }) => theme.color.grey600} !important;
          border-bottom: ${({ theme, pathName }) =>
            pageName === pathName && `2px solid ${theme.color.grey600}`};
        `;
      case "/board":
        return css`
          color: ${({ theme }) => theme.color.lightGrey} !important;
          border-bottom: ${({ theme, pathName }) =>
            pageName === pathName && `2px solid ${theme.color.lightGrey}`};
        `;
    }
  }}
  &:link {
    text-decoration: none;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Login = styled(NavItem)`
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 85px;
  ${({ pageName }) => {
    switch (pageName) {
      case "/":
        return css`
          border: 2px solid ${({ theme }) => theme.color.lightGrey};
        `;
      case "/chat":
      case "/chat/[recipeId]":
        return css`
          border: 2px solid ${({ theme }) => theme.color.grey600};
        `;
      case "/board":
        return css`
          border: 2px solid ${({ theme }) => theme.color.lightGrey};
        `;
    }
  }}
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 1.5rem;
`;