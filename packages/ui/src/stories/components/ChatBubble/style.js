import styled, { css } from "styled-components";
import Icon from "../Icon";
import Text from "../Text";
import Paragraph from "../Paragraph";
import StyledAvatar from "../Avatar/style";
import Avatar from "../Avatar";
import face from "@/assets/images/face-male-1.jpg";
const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`;

const BubbleTip = styled(Icon).attrs({ color: "red" })`
  position: absolute;
  /* bottom: calc(100% % 2);
  left: -55px; */
  bottom: calc(90%);
  left: 0;
  z-index: 5;
  path {
    fill: ${({ theme }) => theme.primaryColor};
  }
`;

const Bubble = styled.div`
  padding: 15px 30px;
  box-sizing: border-box;
  /* border: 1px solid red; */
  max-width: 800px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  z-index: 10;
  word-wrap: break-word;
`;

const MessageText = styled(Text)``;

const ChatAvatar = styled(Avatar).attrs({ src: face })`
  position: absolute;
  bottom: calc(40%);
  right: -20px;
`;
const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `,
};

const StyledChatBubble = styled.div`
  display: flex;
  /* border: 1px solid rebeccapurple; */
  position: relative;
  flex-direction: column;
  padding: 0 60px;

  ${({ type }) => type && typeVariants[type]}
`;
export default StyledChatBubble;
export { Bubble, BubbleTip, MessageText, Time, ChatAvatar };
