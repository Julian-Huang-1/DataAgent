import PropTypes from "prop-types";
import StyledEditProfile, {
  GroupTitle,
  GenderAndRegion,
  SelectGroup,
  StyledIconInput,
} from "./style";
import Profile from "../Profile";
import { useState } from "react";
//静态资源
import face from "@/assets/images/face-male-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//组件页面
import Avatar from "../Avatar";
import Button from "../Button";
import Input from "../Input";
import Radio from "../Radio";
import LabelContainer from "../LabelContainer";
import Select from "../Select";
import Option from "../Option";
import Icon from "../Icon";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);
  if (!showEdit) {
    return <Profile showEditBtn={true} onEdit={() => setShowEdit(true)} />;
  } else {
    return (
      <StyledEditProfile {...rest}>
        <Avatar
          src={face}
          size="160px"
          style={{
            justifySelf: "center",
            gridArea: "1/1/2/2",
            marginBottom: "12px",
          }}
        />
        <Button
          size="52px"
          style={{
            gridArea: "1/1/3/2",
            alignSelf: "end",
            justifySelf: "end",
            // marginLeft: "200px",
            zIndex: 10,
          }}
        >
          <FontAwesomeIcon
            icon={faCheck}
            onClick={() => setShowEdit(false)}
            style={{ fontSize: "30px" }}
          />
        </Button>
        <GroupTitle>基本信息</GroupTitle>
        <Input.Text label="昵称" />
        <GenderAndRegion>
          <Radio.Group label="性别">
            <Radio name="gender">男</Radio>
            <Radio name="gender">女</Radio>
          </Radio.Group>
          <LabelContainer label="地区">
            <SelectGroup>
              <Select type="form">
                <Option>省份</Option>
              </Select>
              <Select type="form">
                <Option>城市</Option>
              </Select>
              <Select type="form">
                <Option>区县</Option>
              </Select>
            </SelectGroup>
          </LabelContainer>
        </GenderAndRegion>
        <Input.Text label="个性签名" />
        <GroupTitle>联系信息</GroupTitle>
        <Input.Text label="联系电话" />
        <Input.Text label="电子邮箱" />
        <Input.Text label="个人网站" />
        <GroupTitle>社交信息</GroupTitle>
        <IconInput icon={faWeibo} bgColor="#F06767" />
        <IconInput icon={faGithub} bgColor="black" />
        <IconInput icon={faLinkedin} bgColor="#2483C0" />
      </StyledEditProfile>
    );
  }
}
function IconInput({ icon, bgColor, ...rest }) {
  return (
    <StyledIconInput>
      <Icon.Social icon={icon} bgColor={bgColor} />
      <Input.Text {...rest} />
    </StyledIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
