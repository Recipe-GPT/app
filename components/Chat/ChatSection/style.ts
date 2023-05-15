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
  gap: 10px;
`;

export const Content = styled.div`
  display: flex;
  min-height: 30px;
  font-size: 1.125rem;
  line-height: 30px;
  width: 100%;
`;

export const ContentLabel = styled.span`
  display: inline-block;
  max-height: 30px;
  min-width: 56px;
`;

export const ShortContentLabel = styled(ContentLabel)`
  min-width: 41px;
`;

export const GreedingContent = styled(Content)`
  margin-bottom: 10px;
`;

export const MaterialWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 30px;
  gap: 10px;
  margin-left: 10px;
`;

export const Material = styled.div`
  background-color: rgba(255, 226, 137, 0.6);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  height: 30px;
`;
