import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const isLoggedIn = true;

  return <>{isLoggedIn ? props.children : <Navigate to={"/cart"} />}</>;
};

export default ProtectedRoute;
