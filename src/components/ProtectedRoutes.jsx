import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Protected Route Component
const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Get token from localStorage

  if (!token) {
    // If token is not found, redirect to login page
    return <Navigate to="/login" />;
  }

  // If token exists, render the protected page
  return <Outlet />;
};

export default ProtectedRoute;
