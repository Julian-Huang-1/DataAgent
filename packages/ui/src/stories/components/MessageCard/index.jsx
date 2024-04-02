import PropTypes from "prop-types";
import StyledMessageCard, {
  Name,
  Status,
  Time,
  MessageText,
  UnreadBadge,
  Message,
} from "./style";
import Avatar from "../Avatar";
import Icon from "../Icon";
import { useTheme } from "styled-components";
import Replied from "@/assets/icons/replied.svg?react";
import messageData from "@/data/message";
function MessageCard({ children, message = messageData[0], active, ...rest }) {
  const theme = useTheme();
  return (
    <StyledMessageCard active={active} {...rest}>
      <Avatar src={message.avatarSrc} status={message.status} />
      <Name>{message.name}</Name>
      <Status>{message.statusText}</Status>
      <Time>{message.time}</Time>
      <Message replied={message.replied}>
        {message.replied && (
          <Icon
            width={16}
            height={14}
            icon={Replied}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            style={{
              justifyContent: "start",
            }}
          />
        )}
        <MessageText>{message.message}</MessageText>
        <UnreadBadge count={message.unreadCount} />
      </Message>
    </StyledMessageCard>
  );
}

MessageCard.propTypes = {
  children: PropTypes.any,
  message: PropTypes.object,
};

export default MessageCard;
