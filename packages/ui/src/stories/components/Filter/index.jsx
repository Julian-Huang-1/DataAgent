import PropTypes from "prop-types";
import StyledFilter, { Filters, Action } from "./style";
import Text from "@/components/Text";
function Filter({ children, ...rest }) {
  return <StyledFilter {...rest}>{children}</StyledFilter>;
}
const FilterText = ({ children, label, ...rest }) => {
  return (
    <Filters {...rest}>
      <Text type="secondary">{label}:</Text>
      {children}
    </Filters>
  );
};
const FilterAction = ({ children, label, ...rest }) => {
  return (
    <Action {...rest}>
      <Text type="secondary">{label}:</Text>
      {children}
    </Action>
  );
};

Filter.FilterText = FilterText;
Filter.FilterAction = FilterAction;

Filter.propTypes = {
  children: PropTypes.any,
};

export default Filter;
