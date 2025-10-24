/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ClientLayout from "@layouts/ClientLayout";
import RequireRole from "@guards/RequireRole";
import Homepage from "@pages/client/Homepage";
import ProductsPage from "@pages/client/ProductsPage";
import ProductDetailPage from "@pages/client/ProductDetailPage";
import CartPage from "@pages/client/CartPage";
import OrdersPage from "@pages/client/OrdersPage";
import SignInPage from "@pages/client/SignInPage";
import SignUpPage from "@pages/client/SignUpPage";

const AdminRoutes = lazy(() => import("@pages/admin/AdminRoutes"));

const AdminModule = () => (
  <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading admin...</div>}>
    <AdminRoutes />
  </Suspense>
);

export const routes: RouteObject[] = [
  {
    path: "/*",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
  {
    path: "/admin/*",
    element: (
      <RequireRole role="admin">
        <AdminModule />
      </RequireRole>
    ),
  },
  { path: "*", element: <Navigate to="/" replace /> },
];
