import { HeaderMenuWrapper } from "./styles";
import { LinkButton, SearchPatient } from "../../../../components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../../../store/slices/auth";

const HeaderMenu = () => {
  const routes = useLocation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.auth);
  return (
    <HeaderMenuWrapper>
      {user?.role !== "admin" && ["/"].includes(routes.pathname) && (
        <SearchPatient
          value={searchText}
          onChange={(event) => dispatch(setSearchText(event.target.value))}
        />
      )}
      {user?.role !== "admin" && <LinkButton title="Home" link="/" />}
      {/* <LinkButton title="About" link="/about" /> */}
      {/* <LinkButton title="Contact" link="/contact" /> */}
      {user?.role === "teacher" && (
        <LinkButton title="Courses" link="/courses" />
      )}
      {user?.role === "admin" && <LinkButton title="Users" link="/" />}
      {user?.role === "admin" && <LinkButton title="Courses" link="/courses" />}
      {/* {user?.role === "admin" && <LinkButton title="Faculty" link="/faculty" />} */}
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;
