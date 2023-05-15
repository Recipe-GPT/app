import styled from "styled-components";

export const ChatSection = styled.section`
  min-height: calc(100vh - 5rem);
  position: relative;
  top: 5rem;
  left: 16.25rem;
  width: calc(100% - 16.25rem);
`;

export const ChatWrap = styled.div`
  background-color: #fffcf4;
  width: 100%;
  padding: 2.5rem 12.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightYellow};
  display: flex;
  gap: 1.5rem;
`;

export const ContentWrap = styled.div`
  line-height: 2px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  font-size: 1.125rem;
  line-height: 40px;
  width: 100%;
`;

export const GreedingContent = styled(Content)`
  margin-bottom: 10px;
`;
