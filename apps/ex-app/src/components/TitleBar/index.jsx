import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Text from "../Text";
import Icon from "../Icon";
import Call from "@/assets/icons/call.svg?react";
import Camera from "@/assets/icons/camera.svg?react";
import Options from "@/assets/icons/options.svg?react";
import DropDown from "../DropDown";
import { DropDownItem } from "../DropDown/style";
import Seperator from "../Seperator";
function TitleBar({
  children,
  avatarSrc,
  avatarStatus,
  userName,
  onAvatarClick,
  onVideoClicked,
  time,
  ...rest
}) {
  return (
    <StyledTitleBar {...rest}>
      {/* 头像组件 */}
      <Avatar
        src={avatarSrc}
        status={avatarStatus}
        onClick={onAvatarClick}
      ></Avatar>
      {/* 标题组件 */}
      <Title>
        <Paragraph size="large">{userName}</Paragraph>
        <Paragraph type="secondary">
          <Text>{avatarStatus === "online" ? "在线" : "离线"}</Text>
          <Text> . 最后阅读：{time}小时前</Text>
        </Paragraph>
      </Title>
      {/* 活动组件 */}
      <Actions>
        <Icon opacity={0.3} icon={Call} onClick={onVideoClicked} />
        <Icon opacity={0.3} icon={Camera} />
        <DropDown
          content={
            <>
              <DropDownItem>
                <Paragraph>个人资料</Paragraph>
              </DropDownItem>
              <DropDownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropDownItem>
              <Seperator />
              <DropDownItem>
                <Paragraph type="danger">屏蔽此人</Paragraph>
              </DropDownItem>
            </>
          }
        >
          <Icon opacity={0.3} icon={Options} />
        </DropDown>
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.string,
  userName: PropTypes.string,
  time: PropTypes.oneOfType(["number", "string"]),
};

export default TitleBar;
