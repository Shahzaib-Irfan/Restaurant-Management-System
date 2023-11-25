import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const AdminPrivateRoute = ({ children }) => {
  const { currentUser } = useUserContext();
  if (currentUser) {
    if (
      currentUser["role"].toLowerCase() === "admin" ||
      currentUser["role"].toLowerCase() === "manager"
    ) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/" />;
  }
};
export default AdminPrivateRoute;
