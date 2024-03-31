import PropTypes from "prop-types";
import StyledIcon from "./style";
import SocialIcon from "./socialIcon";
function Icon({
  icon: IconComponent,
  children,
  width = 24,
  color,
  height = 24,
  opacity,
  ...rest
}) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
      {children}
    </StyledIcon>
  );
}
Icon.Social = SocialIcon;
Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
