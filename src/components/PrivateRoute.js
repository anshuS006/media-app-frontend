import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <Navigate to="/login" />; // Redirect if not logged in
  if (role && user.role !== role) return <Navigate to="/" />; // Redirect if unauthorized

  return children;
};

export default PrivateRoute;
