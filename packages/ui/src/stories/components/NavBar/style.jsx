import { activeBar } from "@/utils/mixin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import StyledAvatar, { StatusIcon } from "../Avatar/style";

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;

  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;
  //引入组件，为组件写样式，必须是被包装过的组件，比如从Avatar->styledAvatar
  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`;
const StyledMenuItem = styled.div`
  /* padding-bottom: 20px; */
  & > a {
    width: 100%;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${activeBar()};
    ${({ active }) => (active ? "" : `&::before,&::after {height:0}`)}
    &:hover {
      &::before,
      &::after {
        height: 100%;
      }
    }
    svg {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;
//给React组件设置样式 使用styled包裹，必须设置className属性
const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
  transform: scale(1);
  transition: 0.4s;
`;
const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;
export default StyledNavBar;
export { StyledMenuItem, MenuIcon, MenuItems };
