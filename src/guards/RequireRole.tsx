import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RequireRoleProps {
  role: "admin";
  children: ReactNode;
}

const RequireRole = ({ role, children }: RequireRoleProps) => {
  const location = useLocation();
  const userRole: "admin" | "guest" = "admin"; // TODO: replace with real auth integration

  if (userRole !== role) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireRole;
