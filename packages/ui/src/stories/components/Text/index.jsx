import PropTypes from "prop-types";
import StyledText from "./style";

//文本分大小、是否加粗、主要次要文本
function Text({ children, type = "primary", size = "normal", bold, ...rest }) {
  return (
    <StyledText {...rest} type={type} size={size} bold={bold}>
      {children}
    </StyledText>
  );
}

Text.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
  bold: PropTypes.bool,
};

export default Text;
