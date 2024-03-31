import PropTypes from "prop-types";
import StyledButton from "./style";

function Button({
  type = "primary",
  shape = "circle",
  size = "30px",
  bgcolor,
  children,
  ...rest
}) {
  return (
    <StyledButton
      {...rest}
      type={type}
      shape={shape}
      size={size}
      bgcolor={bgcolor}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["primary"]),
  shape: PropTypes.oneOf(["circle", "rect"]),
  size: PropTypes.string,
};

export default Button;
