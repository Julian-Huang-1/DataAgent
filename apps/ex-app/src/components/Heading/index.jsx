import PropTypes from "prop-types";
import StyledHeading from "./style";

function Heading({ children, level, ...rest }) {
  return (
    <StyledHeading {...rest} as={`h${level}`}>
      {children}
    </StyledHeading>
  );
}

Heading.propTypes = {
  children: PropTypes.any,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
