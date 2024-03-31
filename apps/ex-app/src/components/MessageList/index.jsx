import PropTypes from "prop-types";
import StyledMessageList from "./style";
import MessageCard from "../MessageCard";
import { ChatList } from "./style";
import FilterList from "../FilterList";
import messageData from "@/data/message";
function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList options={["最新消息优先", "未读消息优先"]} actionLabel="添加">
        <ChatList>
          {messageData.map((message, i) => (
            <MessageCard
              key={i}
              message={message}
              active={i % 2 === 0}
            ></MessageCard>
          ))}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}
// MessageList.ChatFilter = ChatFilter;
MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
