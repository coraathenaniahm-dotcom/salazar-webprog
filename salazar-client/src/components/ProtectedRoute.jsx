import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  // If no user is logged in, redirect to signin
  if (!user) {
    return <Navigate to="/auth/signin" replace />;
  }

  // If a specific role is required, check if user has that role
  if (requiredRole && user.type !== requiredRole) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
