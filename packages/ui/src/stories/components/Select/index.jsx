import PropTypes from "prop-types";
import StyledSelect from "./style";
import LabelContainer from "../LabelContainer";
function Select({ children, label, type, ...rest }) {
  const selectWithoutlabel = () => (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );
  return label ? (
    <LabelContainer label={label}>{selectWithoutlabel()}</LabelContainer>
  ) : (
    selectWithoutlabel()
  );
}

Select.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["form"]),
};

export default Select;
