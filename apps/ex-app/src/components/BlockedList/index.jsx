import PropTypes from "prop-types";
import StyledBlockedList, {
  SettingMenu,
  ClosableAvatar,
  BlockedAvatar,
  CloseIcon,
  BlockedName,
  FriendListContainer,
} from "./style";
import ArrowMenuLeft from "@/assets/icons/arrowMenuLeft.svg?react";
import CloseCircle from "@/assets/icons/closeCircle.svg?react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";
import Text from "../Text";
import blockData from "@/data/blocked";
function BlockedList({ children, ...rest }) {
  const navigate = useNavigate();
  return (
    <StyledBlockedList {...rest}>
      <SettingMenu>
        <Icon
          icon={ArrowMenuLeft}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingMenu>
      <FriendList />
    </StyledBlockedList>
  );
}
function FriendList() {
  const renderBlockedList = () =>
    blockData.map((user) => {
      return (
        <ClosableAvatar key={user.id}>
          <BlockedAvatar size="105px" src={user.avatar} />
          <CloseIcon width={46} height={51} icon={CloseCircle} />
          <BlockedName>{user.name}</BlockedName>
        </ClosableAvatar>
      );
    });
  return <FriendListContainer> {renderBlockedList()}</FriendListContainer>;
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
