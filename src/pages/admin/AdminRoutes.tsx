import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "@layouts/AdminLayout";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import Users from "./Users";
import UserDetail from "./UserDetail";

const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="products" element={<Products />} />
      <Route path="orders" element={<Orders />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<UserDetail />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
