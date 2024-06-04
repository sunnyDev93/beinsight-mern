import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthStatus } from "./../store/auth/selectors";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(getAuthStatus);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
