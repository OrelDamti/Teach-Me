import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ Component, ...rest }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const redirect = location.search.split("=");
  // console.log(user && redirect[1] !== null, user, redirect[1]);

  if (user && redirect[1] !== null && redirect[1] !== undefined) {
    return <Navigate to={redirect[1]} replace />;
  }

  if (user) {
    return <Navigate to={"/"} replace />;
  }
  return <Component {...rest} />;
};

export default PublicRoute;
