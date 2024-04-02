import PropTypes from "prop-types";
import StyledDropDown, { DropdownContainer } from "./style";
import { useState } from "react";
function DropDown({ children, align = "right", content, ...rest }) {
  const [visible, setVisible] = useState(false);
  return (
    <StyledDropDown {...rest} onClick={() => setVisible(!visible)}>
      {children}
      {content && (
        <DropdownContainer align={align} visible={visible}>
          {content}
        </DropdownContainer>
      )}
    </StyledDropDown>
  );
}

DropDown.propTypes = {
  children: PropTypes.any,
};

export default DropDown;
