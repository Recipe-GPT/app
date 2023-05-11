import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { BoardWrap } from "../BoardSection/style";

export const BoardMainSection = styled.section`
  padding: 2rem 9.375rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RecipeButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.25rem;
`;

export const BoardMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.div`
  color: ${({ theme }) => theme.color.grey900};
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const Search = styled.input`
  border-radius: 3rem;
  background-color: #f0f0f0;
  color: ${({ theme }) => theme.color.grey900};
  border: none;
  width: 260px;
  padding: 1rem;
  /* font-size: 1.25rem; */
`;

export const SearchButton = styled(IoSearch)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.grey900};
  right: 1rem;
`;

export const BoardMainWrap = styled(BoardWrap)``;
