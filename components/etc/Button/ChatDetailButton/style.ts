import Link from "next/link";
import styled from "styled-components";

export const ChatDetailButton = styled(Link)`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.color.serveYellow};
  color: ${({ theme }) => theme.color.lightGrey};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.color.lightYellow};
  }
  border: none;
  border-radius: 15px;
  box-shadow: 0px 1px 2px rgba(255, 215, 96, 0.35);
`;
