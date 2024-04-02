import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style";

function Badge({
  children,
  show = false,
  count = 0,
  showZero = false,
  ...rest
}) {
  return (
    <StyledBadge
      {...rest}
      show={show}
      count={count}
      showZero={showZero}
      variant={children ? "dot" : "default"}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  showZero: PropTypes.bool,
  count: PropTypes.number,
  children: PropTypes.any,
};

export default Badge;
