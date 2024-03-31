import styled from "styled-components";
import StyledSeperator from "../Seperator/style";
const StyledDropDown = styled.div`
  position: relative;
  cursor: pointer;
`;
const DropdownContainer = styled.div`
  position: absolute;
  ${({ align }) => align}: 0;
  white-space: nowrap;
  padding: 4px 26px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  display: ${({ visible }) => (visible ? "block" : "none")};
  ${StyledSeperator} {
    margin: 0 -26px;
    width: calc(100% + 52px);
  }
`;
const DropDownItem = styled.div``;
export default StyledDropDown;
export { DropdownContainer, DropDownItem };
