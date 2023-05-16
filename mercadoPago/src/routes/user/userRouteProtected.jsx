import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const UserRouteProtected = () => {
  const auth = useSelector((state) => state.auth);

  if (auth.session === false) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
