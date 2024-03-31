import styled from "styled-components";
import StyledInput from "../Input/style";
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
  & > * {
    margin-left: 16px;
  }
`;
const StyledPopoverContent = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 0 8px;
    font-size: 16px;
  }
  & > *:hover {
    cursor: pointer;
  }
`;
const StyledFooter = styled.div`
  width: 100%;
  padding: 15px 0;
  border: 1px solid ${({ theme }) => theme.gray2};
  background: ${({ theme }) => theme.gray2};
  border-radius: 50px;
  ${StyledInput} {
    &::placeholder {
      color: ${({ theme }) => theme.gray3};
      font-size: 16px;
    }
  }
`;
export default StyledFooter;
export { IconContainer, StyledPopoverContent };
