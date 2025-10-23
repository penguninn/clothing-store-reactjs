import { useState, useEffect } from "react";
import type {OrderType} from "@/types";
import { mockOrders } from "../data/mockData";

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from API
    setOrders(mockOrders);
  }, []);

  if (!orders || orders.length === 0) {
    return (
      <div className="mt-12">
        <h1 className="text-2xl my-4 font-medium">Your Orders</h1>
        <p className="text-gray-500">No orders found!</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h1 className="text-2xl my-4 font-medium">Your Orders</h1>
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="flex flex-col md:flex-row md:items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="w-full md:w-1/4">
              <span className="font-medium text-sm text-gray-500">
                Order ID
              </span>
              <p className="text-sm">{order._id}</p>
            </div>
            <div className="w-full md:w-1/12">
              <span className="font-medium text-sm text-gray-500">Total</span>
              <p className="text-sm">${(order.amount / 100).toFixed(2)}</p>
            </div>
            <div className="w-full md:w-1/12">
              <span className="font-medium text-sm text-gray-500">Status</span>
              <p className={`text-sm font-medium ${
                order.status === "success" ? "text-green-600" : "text-red-600"
              }`}>
                {order.status}
              </p>
            </div>
            <div className="w-full md:w-1/8">
              <span className="font-medium text-sm text-gray-500">Date</span>
              <p className="text-sm">
                {order.createdAt
                  ? new Date(order.createdAt).toLocaleDateString("en-US")
                  : "-"}
              </p>
            </div>
            <div className="w-full md:flex-1">
              <span className="font-medium text-sm text-gray-500">
                Products
              </span>
              <p className="text-sm">
                {order.products?.map((product) => product.name).join(", ") || "-"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
