import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashboard";
import AuthorDashboard from "../pages/author/AuthorDashboard";
import PrivateRoute from "../components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      <Route path="/admin" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />
      <Route path="/author" element={<PrivateRoute role="author"><AuthorDashboard /></PrivateRoute>} />
      <Route path="/user" element={<PrivateRoute role="user"><UserDashboard /></PrivateRoute>} />

      {/* Redirect unknown routes to Home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
