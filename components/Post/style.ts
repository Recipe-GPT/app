import styled from "styled-components";

export const Post = styled.form`
  background-color: ${({ theme }) => theme.color.serveYellow};
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
  top: 5rem;
  padding: 0 9.375rem 9.375rem;
  min-height: calc(100vh - 5rem);
`;

export const Submit = styled.input`
  width: 100%;
  margin-top: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.color.mainYellow};
  cursor: pointer;
  font-size: 1.25rem;
  &:focus-visible{
    outline: none;
  }
`;
