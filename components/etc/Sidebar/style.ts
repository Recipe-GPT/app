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

export const SidebarItem = styled(Link)`
  ${SidebarButtonStyles}
`;

export const NewRecipeButton = styled.div`
  border: 2px solid ${({ theme }) => theme.color.lightGrey};
  ${SidebarButtonStyles}
`;

export const ForkIcon = styled(Image)``;
