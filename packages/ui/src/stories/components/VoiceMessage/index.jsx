import PropTypes from "prop-types";
import StyledVoiceMessage from "./style";
import Button from "@/components/Button";
import Icon from "../Icon";
import Text from "../Text";
import Play from "@/assets/icons/play.svg?react";
import Wave from "@/assets/icons/wave.svg?react";
function VoiceMessage({ children, time, type, ...rest }) {
  return (
    <StyledVoiceMessage {...rest} type={type}>
      <Button shape="circle" size="40px">
        <Icon
          icon={Play}
          width="14px"
          height="16px"
          style={{ marginLeft: "2px" }}
        ></Icon>
      </Button>
      <Icon icon={Wave} width="100%" height="100%" />
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
};

export default VoiceMessage;
