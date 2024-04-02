import styled, { css } from "styled-components";
import CareDown from "@/assets/icons/caret_down.svg";
import CareDown2 from "@/assets/icons/caretDown2.svg";
const typeVariants = {
  form: css`
    background-image: url(${CareDown2});
  `,
};

const StyledSelect = styled.select`
  appearance: none;
  background-image: url(${CareDown});
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 14px;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};
  ${({ type }) => type && typeVariants[type]}
`;
export default StyledSelect;
