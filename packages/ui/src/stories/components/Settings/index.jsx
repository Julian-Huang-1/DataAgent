import PropTypes from "prop-types";
import StyledSettings, {
  SettingItem,
  SettingsItemControl,
  StyledSettingsGroup,
  StyledSettingsPage,
  StyledGroupContainer,
} from "./style";
import ArrowMenuRight from "@/assets/icons/arrowMenuRight.svg?react";
import Seperator from "../Seperator";
import Switch from "../Switch";
import Paragraph from "../Paragraph";
import Icon from "../Icon";
import Heading from "../Heading";
import { Link } from "react-router-dom";
function Settings({ label, description, type, children, ...rest }) {
  return (
    <StyledSettings {...rest}>
      <SettingsItem label={label} description={description} type={type} />
    </StyledSettings>
  );
}
function SettingsItem({
  type = "switch",
  label,
  description,
  children,
  ...rest
}) {
  return (
    <SettingItem>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {type === "switch" && <Switch />}
        {type === "menu" && <Icon icon={ArrowMenuRight} />}
      </SettingsItemControl>
      {description && (
        <Paragraph type="secondary" style={{ margin: "4px 0" }}>
          {description}
        </Paragraph>
      )}
      <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />
    </SettingItem>
  );
}
export function SettingPage({ pageName, children, ...rest }) {
  return (
    <StyledSettingsPage>
      {/* <Heading
        level={1}
        style={{ display: "flex", justifyContent: "center", padding: "32px" }}
      >
        {pageName}
      </Heading> */}
      <StyledGroupContainer style={{ padding: "32px", marginTop: "5vh" }}>
        <SettingsGroup groupName="隐私设置">
          <SettingsItem label="添加好友时需要验证" />
          <SettingsItem
            label="推荐通讯录好友"
            description="上传的通讯录只用来匹配好友列表，本应用不会记录和发送任何信息给其它机构或"
          />
        </SettingsGroup>
        <SettingsGroup groupName="通知设置">
          <SettingsItem label="新消息通知" />
          <SettingsItem label="语音和视频通话提醒" />
          <SettingsItem label="显示通知详情" />
          <SettingsItem label="声音" />
          <Link
            to={`/settings/blocked`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <SettingsItem label="查看已静音的好友列表" type="menu" />
          </Link>
        </SettingsGroup>
      </StyledGroupContainer>
    </StyledSettingsPage>
  );
}
export function SettingsGroup({ groupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  );
}
Settings.propTypes = {
  type: PropTypes.oneOf(["menu", "switch"]),
  label: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
};

export default Settings;
