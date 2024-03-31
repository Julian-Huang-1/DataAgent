import PropTypes from "prop-types";
import React from "react";
import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";
import ClipIcon from "@/assets/icons/clip.svg?react";
import SmileIcon from "@/assets/icons/smile.svg?react";
import MicrophoneIcon from "@/assets/icons/microphone.svg?react";
import PlaneIcon from "@/assets/icons/plane.svg?react";
import OptionsIcon from "@/assets/icons/options.svg?react";
import Icon from "../Icon";
import Popover from "../Popover";
import Input from "../Input";
import Button from "../Button";
import Emoji from "../Emoji";
import { useTheme } from "styled-components";
import { useState } from "react";
import theme from "@/theme";
import { useEffect } from "react";
//导入仓库
import { addMessage } from "@/store/store";
//获取请求接口
import fetchData, { uploadExcel } from "@/ai";
function Footer({ children, ...rest }) {
  const theme = useTheme();
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "system", content: "你是一个乐于帮助人的助手" },
  ]);

  const [excelData, setExcelData] = useState([]);
  const [fileInfo, setFileInfo] = useState({});
  const [fileState, setFileState] = useState(false);

  const [fileObj, setFileObj] = useState(null);
  var formData = new FormData();
  // 创建 FormData 对象，用于包装文件数据
  if (fileObj) {
    formData.append("file", fileObj);
  }
  console.log("formData---", formData.get("file"));
  //发送请求
  const sendMessage = async () => {
    if (message.trim() === "" && excelData.length === 0) {
      return;
    }
    //将用户的消息推入消息列表中
    // 更新用户发送的消息到消息列表
    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: message.trim() + JSON.stringify(excelData),
      },
    ];

    setMessages(updatedMessages);
    setFileState(false);
    //更新到仓库
    addMessage({
      role: "user",
      content: message.trim() + JSON.stringify(excelData),
    });
    //上传文件到后端
    //如果用户有上传文件
    if (formData) {
      console.log("用户上传的formdata", formData);
      try {
        const res = await uploadExcel(formData);
        console.log("上传表格给后端", res);
      } catch (err) {
        console.log("上传文件出现错误：", err);
      }
    }
    // try {
    //   //发送请求获取回复
    //   const res = await fetchData(updatedMessages);
    //   // 更新消息列表添加助手回复
    //   const updatedMessagesWithResponse = [
    //     ...updatedMessages,
    //     { role: "assistant", content: res.message.content },
    //   ];
    //   setMessages(updatedMessagesWithResponse);
    //   addMessage({ role: "assistant", content: res.message.content });
    // } catch (error) {
    //   console.error("发送消息时出错:", error);
    // }
    setMessage("");
  };
  // console.log("带有表格数据的message", messages);

  return (
    <StyledFooter {...rest}>
      <Input
        placeholder="输入想和对方说的话..."
        message={message}
        fileInfo={fileInfo}
        fileState={fileState}
        setMessage={setMessage}
        setExcelData={setExcelData}
        setFileInfo={setFileInfo}
        setFileObj={setFileObj}
        setFileState={setFileState}
        prefix={<ClipIcon />}
        suffix={
          <IconContainer>
            <Popover
              offset={{ x: "-25%" }}
              onHide={() => setEmojiIconActive(false)}
              onVisible={() => setEmojiIconActive(true)}
              content={<PopoverContent />}
              style={{ zIndex: "100" }}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.gray3}
              />
            </Popover>
            <Icon icon={MicrophoneIcon} />
            <Button size="50px" shape="circle" onClick={sendMessage}>
              <Icon
                icon={PlaneIcon}
                style={{ transform: "translateX(-2px)" }}
                color="white"
              />
            </Button>
          </IconContainer>
        }
        // 传递其他 props
      />
      {children}
    </StyledFooter>
  );
}
function PopoverContent() {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">😊</Emoji>
      <Emoji label="grinning">😆</Emoji>
      <Emoji label="thumbup">👍</Emoji>
      <Emoji label="indexfingerup">☝️</Emoji>
      <Emoji label="ok">👌</Emoji>
      <Emoji label="handsputtogether">🙏</Emoji>
      <Emoji label="smilewithsunglasses">😎</Emoji>
      <Emoji label="flexedbicep">💪</Emoji>
      <Icon
        icon={OptionsIcon}
        style={{ marginLeft: "24px" }}
        color={theme.gray3}
      />
    </StyledPopoverContent>
  );
}
Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
