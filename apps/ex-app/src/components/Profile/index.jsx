import PropTypes from "prop-types";
import StyledProfile, {
  CloseIcon,
  SocialLink,
  ContactSection,
  AlbumSection,
  AlbumTitle,
  Album,
  Photo,
} from "./style";
//静态资源
import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Cross from "@/assets/icons/cross.svg?react";
import face from "@/assets/images/face-male-2.jpg";
import photo1 from "@/assets/images/photo1.jpg";
import photo2 from "@/assets/images/photo2.jpg";
import photo3 from "@/assets/images/photo3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//引入组件
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Emoji from "../Emoji";
import Icon from "../Icon";
import Seperator from "../Seperator";
import Text from "../Text";
import Button from "../Button";
import { faPen } from "@fortawesome/free-solid-svg-icons";
function Profile({
  children,
  showEditBtn,
  showCloseIcon,
  onCloseClick,
  onEdit,
  status,
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
      <Avatar
        src={face}
        size="160px"
        status={status}
        statusIconSize="25px"
        style={{ margin: "26px 0", gridArea: "1 / 1 / 3 / 2" }}
      />
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          style={{
            margin: "26px 0",
            gridArea: "1 / 1 / 3 / 2",
            alignSelf: "end",
            marginLeft: "100px",
            zIndex: 10,
          }}
        >
          <FontAwesomeIcon icon={faPen} style={{ fontSize: "24px" }} />
        </Button>
      )}
      <Paragraph size="xlarge" style={{ marginBottom: "12px" }}>
        慕容天宇
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        style={{ marginBottom: "18px" }}
      >
        北京市 朝阳区
      </Paragraph>
      <Paragraph style={{ marginBottom: "26px" }}>
        帮助客户构建网站，并协助在社交网站上进行推广{" "}
        <Emoji label="fire">🔥</Emoji>
      </Paragraph>
      <SocialLink>
        <Icon.Social
          icon={faWeibo}
          bgColor="#F06767"
          href="http://www.weibo.com"
        />
        <Icon.Social icon={faGithub} bgColor="black" />
        <Icon.Social icon={faLinkedin} bgColor="#2483C0" />
      </SocialLink>
      <Seperator style={{ margin: "30px 0" }} />
      <ContactSection>
        <Description label="联系电话">+86 18688888888</Description>
        <Description label="电子邮件">admin@fh.com</Description>
        <Description label="个人网站">https://zxuqian.cn</Description>
      </ContactSection>
      <Seperator style={{ margin: "30px 0" }} />
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册（31）</Text>
          <a href="_blank">查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt="" />
          <Photo src={photo2} alt="" />
          <Photo src={photo3} alt="" />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}
function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary" style={{ marginRight: "12px" }}>
        {label}:
      </Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
