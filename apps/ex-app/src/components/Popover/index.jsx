import PropTypes from "prop-types";
import StyledPopover, { Content, Triangle, Target } from "./style";
import { useState } from "react";
function Popover({ children, content, offset, onHide, onVisible, ...rest }) {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    if (visible) {
      setVisible(false);
      onHide && onHide();
    } else {
      setVisible(true);
      onVisible && onVisible();
    }
  };
  return (
    <StyledPopover {...rest} onClick={handleClick}>
      <Content visible={visible} offset={offset}>
        {content}
      </Content>
      <Triangle visible={visible} offset={offset}></Triangle>
      <Target>{children}</Target>
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
};

export default Popover;
