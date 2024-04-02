import styled from "styled-components";
import Avatar from "../Avatar";
import Icon from "../Icon";
import Text from "../Text";
import StyledText from "../Text/style";
const StyledBlockedList = styled.div`
  padding: 2vh 4vw;
`;
const SettingMenu = styled.div`
  height: 148px;
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;
  ${StyledText} {
    grid-column: span 1/-1;
    justify-self: center;
  }
`;
const ClosableAvatar = styled.div`
  display: grid;
  //分成四行三列
  grid-template-areas:
    "avatar avatar avatar"
    "avatar avatar avatar"
    "avatar avatar avatar"
    "name name name";

  justify-items: center;
`;
const BlockedAvatar = styled(Avatar)`
  grid-area: avatar;
`;
const CloseIcon = styled(Icon)`
  grid-area: 2 / 3 / 5/ 4;
  z-index: 10;
  margin-top: 10px;
`;
const BlockedName = styled(Text).attrs({ size: "xlarge" })`
  grid-area: name;
  margin-top: 20px;
`;
const FriendListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  justify-items: center;
`;
export default StyledBlockedList;
export {
  SettingMenu,
  ClosableAvatar,
  BlockedAvatar,
  CloseIcon,
  BlockedName,
  FriendListContainer,
};
