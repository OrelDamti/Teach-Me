import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HeaderIconMenuWrapper } from "./styles";
import UserPopover from "./user-popover";

const HeaderIconMenu = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <HeaderIconMenuWrapper>
      <li className="iconMenuList accountMenu">
        <NavLink
          to="/login"
          style={{
            padding: "0",
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          {user && user?.name !== null ? user?.name : "Sign in"}
        </NavLink>
      </li>
      {user && user?.name !== null && <UserPopover />}
    </HeaderIconMenuWrapper>
  );
};

export default HeaderIconMenu;
