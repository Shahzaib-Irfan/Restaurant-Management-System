import React from "react";
import { Navigate } from "react-router-dom";
// will remove later
import { useUserContext } from "../contexts/UserContext";

const UserPrivateRoute = ({ children }) => {
  const { currentUser, token } = useUserContext();
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};
export default UserPrivateRoute;
