import PropTypes from "prop-types";
import StyledEmoji from "./style";

function Emoji({ children, label, ...rest }) {
  return (
    <StyledEmoji {...rest} role="img" aria-label={label}>
      {children}
    </StyledEmoji>
  );
}

Emoji.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
};

export default Emoji;
