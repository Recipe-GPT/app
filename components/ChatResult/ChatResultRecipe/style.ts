import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import { Material } from "../ChatResultSection/style";

export const Index = styled.span`
  display: inline-block;
  width: 20px;
`;

export const StyledLi = styled.p`
  display: flex;
  &::before {
    content: "·";
    margin: 0 10px 0 20px;
  }
`;

export const Recipe = styled.div`
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.color.grey600};
  }
`;

export const StyledLink = styled(Link)`
  &:link {
    text-decoration: none;
  }
`;

export const MaterialOpenButton = styled(MdKeyboardArrowDown)<{
  isOpen: boolean;
}>`
  position: absolute;
  right: 2rem;
  top: 1.875rem;
  transform: translateY(-50%) ${({ isOpen }) => isOpen && "rotate(180deg)"};
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const MaterialList = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const MaterialEmphasis = styled(Material)`
  background-color: rgba(255, 215, 96, 0.5);
`;
