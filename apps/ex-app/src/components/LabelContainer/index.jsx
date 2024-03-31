import PropTypes from "prop-types";
import StyledLabelContainer from "./style";
import Text from "../Text";
function LabelContainer({ children, label, ...rest }) {
  return (
    <StyledLabelContainer {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}:</Text>}
      {children}
    </StyledLabelContainer>
  );
}

LabelContainer.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
};

export default LabelContainer;
