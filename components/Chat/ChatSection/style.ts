import { IoClose } from "react-icons/io5";
import styled from "styled-components";

export const ChatSection = styled.section`
  position: relative;
  top: 4rem;
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
  width: 100%;
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
  font-weight: 600;
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
  user-select: none;
  background-color: rgba(255, 226, 137, 0.6);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  height: 30px;
  /* transition: 0.3s; */
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.lightGrey};
  }
  position: relative;
`;

export const Transparent = styled.span`
  color: transparent;
`;

export const CloseButton = styled(IoClose)`
  position: absolute;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
`;
