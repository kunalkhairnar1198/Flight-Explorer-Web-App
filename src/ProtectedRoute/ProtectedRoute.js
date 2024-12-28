import React from 'react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children, allowedRole }) => {

  const userRole = localStorage.getItem('role'); // Get user role from localStorage
//   console.log(userRole);

  if (!userRole) {
    // If no role is found, redirect to the login page (assuming '/' is login)
    return <Navigate to="/" />;
  }

  if (!allowedRole.includes(userRole)) {
    // If the user's role is not in the allowedRole list, redirect to the admin page
    return <Navigate to="/layout" />;
  }

  // If role is allowed, render the children (the protected component)
  return children;
};

export default ProtectedRoute;
