import styled from "styled-components";
import Avatar from "../Avatar";
import Button from "../Button";
import { card } from "@/utils/mixin";
const StyledVideoCall = styled.div`
  height: 100%;
  padding: 20px;
  padding-bottom: 40px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  display: grid;
  row-gap: 80px;
  grid-template-areas:
    "title title"
    "actions self";
`;
const Minimize = styled(Button)`
  grid-area: title;
  justify-self: end;
  background-color: ${({ theme }) => theme.gray3};
  padding: 0px;
  width: 50px;
  height: 50px;
  font-size: 36px;
`;
const ActionsIcon = styled.div`
  grid-area: actions / title;
  align-self: end;
  justify-self: center;
  display: grid;
  grid-template-columns: 90px 90px 210px;
`;
const Action = styled(Button).attrs({ size: "50px" })`
  font-size: 22px;
  color: white;
  box-shadow: none;
  background: ${({ theme, type }) =>
    type === "hangoff" ? theme.red2 : theme.grayDark2};
`;
const Self = styled(Avatar)`
  grid-area: self;
  align-self: end;
  justify-self: end;
`;
//最小化窗口弹窗
const StyledMinWindow = styled.div`
  display: grid;
  grid-template-areas:
    "avatar info info"
    "avatar action icon";
  row-gap: 5px;
  column-gap: 10px;
  align-items: center;
  width: max-content;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${({ theme }) => theme.gray4};
  z-index: 200;
  ${card}
`;
export default StyledVideoCall;
export { Minimize, ActionsIcon, Self, Action, StyledMinWindow };
