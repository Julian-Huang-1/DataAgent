import styled from "styled-components";
import StyledText from "../Text/style";
const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 21px 9px;
`;
const Filters = styled.div`
  ${StyledText} {
    padding-right: 1rem;
  }
`;
const Action = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  }
`;

export default StyledFilter;
export { Filters, Action };
