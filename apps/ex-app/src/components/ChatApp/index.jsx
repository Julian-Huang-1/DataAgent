import PropTypes from "prop-types";
import StyledChatApp, {
  Nav,
  SideBar,
  MinixIcon,
  Content,
  Drawer,
} from "./style";
import NavBar from "../NavBar";
import MessageList from "../MessageList";
import Conversation from "../Conversation";
import Profile from "../Profile";
import ContactCardList from "../ContactCardList";
import FileCardList from "../FileCardList";
import NoteCardList from "../NoteCardList";
import EditProfile from "../EditProfile";
import VideoCall from "../VideoCall";
import { SettingPage } from "../Settings";
import BlockedList from "../BlockedList";
import Icon from "../Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Excel from "../Excel";
function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [videoCalling, setVideoCalling] = useState(false);
  const hanldeSiderShow = () => {
    console.log("我被点击了");
    setShowSideBar(!showSideBar);
  };
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <SideBar showSideBar={!showSideBar}>
        <MinixIcon onClick={hanldeSiderShow}>
          <FontAwesomeIcon icon={faCompress} size="2x" />
        </MinixIcon>
        <Routes>
          <Route path="/" element={<MessageList />}></Route>
          <Route path="/contacts" element={<ContactCardList />} />
          <Route path="/files" element={<FileCardList />} />
          <Route path="/notes" element={<NoteCardList />} />
          <Route path="/settings/*" element={<EditProfile />} />
        </Routes>
      </SideBar>
      <Content>
        {videoCalling && (
          <VideoCall onHangOffClicked={() => setVideoCalling(false)} />
        )}
        <Routes>
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/contacts" element={<Excel />} />
          <Route path="/settings/blocked" element={<BlockedList />} />
          <Route
            path="/"
            element={
              <Conversation
                onAvatarClick={() => setShowDrawer(true)}
                onVideoClicked={() => setVideoCalling(true)}
              />
            }
          />
        </Routes>
      </Content>
      <Drawer show={showDrawer}>
        <Profile showCloseIcon onCloseClick={() => setShowDrawer(false)} />
      </Drawer>
      {children}
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
