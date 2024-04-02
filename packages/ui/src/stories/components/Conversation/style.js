import styled from "styled-components";
import ChatBubble from "../ChatBubble";
const Conversations = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  flex: 1;
  & > * {
    margin: 10px 0;
    margin-right: 25px;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background-color: #c3c3c3;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    font-size: ${({ theme }) => theme.medium};
  }
`;
const MyChatBubble = styled(ChatBubble).attrs({ type: "mine" })``;

const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.gray4};
  & > *:last-child {
    align-self: end;
  }
`;
export default StyledConversation;
export { Conversations, MyChatBubble };
