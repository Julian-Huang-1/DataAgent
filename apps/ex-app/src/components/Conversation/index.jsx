import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "../TitleBar";
import Emoji from "../Emoji";
import ChatBubble from "../ChatBubble";
import VoiceMessage from "../VoiceMessage";
import Footer from "../Footer";
import face from "@/assets/images/face-male-1.jpg";
import useStore from "@/store/store";
import formatTime from "@/utils/tools";
import MarkdownRenderer from "@/MarkDownCom/Markdown";
const markdownText = `
# Markdown示例

这是一个包含JavaScript代码块的Markdown示例：

\`\`\`javascript
function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// 测试
var arr = [64, 34, 25, 12, 22, 11, 90];
var sortedArr = bubbleSort(arr);
console.log("排序后的数组:", sortedArr);
\`\`\`
`;
function Conversation({ children, onAvatarClick, onVideoClicked, ...rest }) {
  const messageList = useStore((state) => state.messages);
  console.log("对话组件收到的消息列表", messageList);
  const showMessages = () => {
    if (messageList !== null) {
      return messageList.map((messageObj, i) => (
        <div
          key={i}
          style={{ alignSelf: messageObj.role === "user" ? "end" : "start" }}
        >
          {messageObj.role === "user" ? (
            <MyChatBubble time={formatTime(Date.now())} key={i}>
              {messageObj.content}
            </MyChatBubble>
          ) : (
            <ChatBubble time={formatTime(Date.now())} key={i}>
              <MarkdownRenderer markdownText={markdownText} />
            </ChatBubble>
          )}
        </div>
      ));
    }
  };
  return (
    <StyledConversation {...rest}>
      <TitleBar
        avatarSrc={face}
        avatarStatus="online"
        time={3}
        onVideoClicked={onVideoClicked}
        onAvatarClick={onAvatarClick}
        userName="慕容天宇"
      />
      {/* <Conversations>{showMessages()}</Conversations> */}
      <Conversations>{showMessages()}</Conversations>
      <Footer />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
