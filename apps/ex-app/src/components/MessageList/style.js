import styled from "styled-components";
const StyledMessageList = styled.div`
  /* padding: 20px; */
`;
const ChatList = styled.div`
  margin-top: -8px;
  & > * {
    margin: 8px 0;
  }
`;
export default StyledMessageList;
export { ChatList };
