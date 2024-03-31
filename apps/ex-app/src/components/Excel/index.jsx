import PropTypes from "prop-types";
import StyledExcel from "./style";

function Excel({ children, ...rest }) {
  return (
    <StyledExcel {...rest}>
      <div style={{ height: 300, width: "100%" }}>hha</div>
    </StyledExcel>
  );
}

Excel.propTypes = {
  children: PropTypes.any,
};

export default Excel;
