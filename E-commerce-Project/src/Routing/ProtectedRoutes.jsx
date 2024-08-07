import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoginContext } from "../contexts/loginContext";
import { RedirectContext } from "../contexts/RedirectContext";

const ProtectedRoute = () => {
  const { loginDetails, setLoginDetails } = useContext(LoginContext);
  const { redirectPath, setRedirectPath } = useContext(RedirectContext);
  const location = useLocation();
  const isLoggedIn = loginDetails.length > 0;

  useEffect(() => {
    if (!isLoggedIn) {
      setRedirectPath(location.pathname);
    }
  }, [isLoggedIn, location.pathname, setRedirectPath]);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
