import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = styled.div`
  padding: 10px;
  padding-top: calc(10px + 5rem);
  height: 100vh;
  position: fixed;
  width: 16.25rem;
  background-color: #41414b;
  color: ${({ theme }) => theme.color.grey600};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SidebarItemWrap = styled.div``;

const SidebarButtonStyles = css`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey900};
  }
  border-radius: 0.5rem;
`;

export const SidebarItem = styled(Link)<{ index: number; pathname: string }>`
  ${SidebarButtonStyles}
  justify-content: space-between;
  background-color: ${({ theme, index, pathname }) =>
    index === Number(pathname) && theme.color.lightGrey};
  &:hover {
    background-color: ${({ theme, index, pathname }) =>
      index === Number(pathname) && theme.color.lightGrey};
  }
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const NewRecipeButton = styled.div`
  border: 2px solid ${({ theme }) => theme.color.lightGrey};
  ${SidebarButtonStyles}
`;

export const ForkIcon = styled(Image)``;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UpdateNameInput = styled.input`
  width: 7rem;
  height: 1.25rem;
`;
