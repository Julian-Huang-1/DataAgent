import PropTypes from "prop-types";
import StyledVideoCall, {
  Minimize,
  ActionsIcon,
  Self,
  Action,
  StyledMinWindow,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVolumeMute,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import face from "@/assets/images/face-male-1.jpg";
import videoCaller from "@/assets/images/video-caller.jpg";
import { useState } from "react";
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";

function VideoCall({ children, onHangOffClicked, ...rest }) {
  const [fullScreen, setFullScreen] = useState(true);
  //不是全屏，显示最小化窗口
  if (!fullScreen) {
    return (
      <StyledMinWindow>
        <Avatar src={face} style={{ gridArea: "avatar" }} />
        <Paragraph size="medium" style={{ gridArea: "info" }}>
          正在跟 李铭浩 进行视频通话
        </Paragraph>
        <Paragraph
          type="secondary"
          style={{ gridArea: "action", cursor: "pointer" }}
          onClick={() => setFullScreen(true)}
        >
          点击切换全屏
        </Paragraph>
        <FontAwesomeIcon
          icon={faVideo}
          style={{
            gridArea: "icon",
            fontSize: "20px",
            justifySelf: "end",
            opacity: "0.3",
          }}
        />
      </StyledMinWindow>
    );
  }
  //是全屏，显示通话页面
  return (
    <StyledVideoCall {...rest} src={videoCaller}>
      <Minimize shape="rect" onClick={() => setFullScreen(false)}>
        <FontAwesomeIcon icon={faCompressAlt} />
      </Minimize>
      <ActionsIcon>
        <Action>
          <FontAwesomeIcon icon={faMicrophone} />
        </Action>
        <Action type="hangoff">
          <FontAwesomeIcon icon={faPhoneSlash} onClick={onHangOffClicked} />
        </Action>
        <Action>
          <FontAwesomeIcon icon={faVolumeMute} />
        </Action>
      </ActionsIcon>
      <Self src={face} size="80px"></Self>
    </StyledVideoCall>
  );
}

VideoCall.propTypes = {
  children: PropTypes.any,
};

export default VideoCall;
