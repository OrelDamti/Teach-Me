import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => {
  const { user } = useSelector((state) => state.auth);
  // console.log('private');
  if (user) {
    return Component ? (
      <Component {...rest} />
    ) : (
      <Navigate to={navLink} replace />
    );
  }

  return <Navigate to="/" replace />;
};

export default PrivateRoute;
