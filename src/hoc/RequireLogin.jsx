import { Navigate, useLocation } from "react-router-dom";
import { useLogin } from "../hook/useLogin";

const RequireLogin = ({ children }) => {
  const { user } = useLogin();
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to="/login" state={ {from: pathname} }/>
  }

  return children;
};

export default RequireLogin;