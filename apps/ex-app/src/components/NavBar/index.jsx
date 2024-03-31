import PropTypes from "prop-types";
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from "./style";
import Badge from "@/components/Badge";
import Avatar from "@/components/Avatar";
import face1 from "@/assets/images/face-male-1.jpg";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

import { faUsers, faEllipsisH, faCog } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation, matchPath } from "react-router-dom";
function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={face1} status="online"></Avatar>
      <MenuItems>
        <MenuItem showBadge icon={faCommentDots} to="/" />
        <MenuItem icon={faUsers} to="/contacts" />
        <MenuItem icon={faFolder} to="/files" />
        <MenuItem icon={faStickyNote} to="/notes" />
        <MenuItem icon={faEllipsisH} />
        <div style={{ alignSelf: "end", marginBottom: "40px" }}>
          <MenuItem icon={faCog} to="/settings" />
        </div>
      </MenuItems>
    </StyledNavBar>
  );
}
function MenuItem({ to = "#", icon, showBadge }) {
  const loc = useLocation();
  const active = !!matchPath(
    {
      path: to, //要匹配的路径
      end: true, //要求完全匹配
    },

    loc.pathname //当前浏览器地址
  );

  return (
    <StyledMenuItem active={active}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon icon={icon} active={active}></MenuIcon>
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}
NavBar.propTypes = {
  rest: PropTypes.any,
};

export default NavBar;
export { MenuItem };
