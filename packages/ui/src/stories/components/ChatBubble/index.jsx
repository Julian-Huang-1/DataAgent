import PropTypes from "prop-types";
import StyledChatBubble, {
  Bubble,
  BubbleTip,
  MessageText,
  Time,
  ChatAvatar,
} from "./style";
import OpenAiIcon from "@/assets/icons/openai.svg?react";
function ChatBubble({ children, time, type, ...rest }) {
  return (
    <StyledChatBubble {...rest} type={type}>
      <Bubble>
        {type === "mine" ? (
          <ChatAvatar size="56px" />
        ) : (
          <BubbleTip icon={OpenAiIcon} width={56} height={48} color="blue" />
        )}

        <MessageText>{children}</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </StyledChatBubble>
  );
}

ChatBubble.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default ChatBubble;
