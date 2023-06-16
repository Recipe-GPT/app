import Link from "next/link";
import styled from "styled-components";

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

export const MaterialOpenButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
`;
