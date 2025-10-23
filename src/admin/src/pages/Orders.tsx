import { useEffect, useState } from "react";
import { mockOrders } from "../data/mockData";
import { OrderType } from "../types";
import { Badge } from "../components/ui/badge";

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setOrders(mockOrders);
  }, []);

  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Orders</h1>
      </div>
      <div className="rounded-md border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="p-4">{order._id}</td>
                <td className="p-4">{order.email}</td>
                <td className="p-4">${(order.amount / 100).toFixed(2)}</td>
                <td className="p-4">
                  <Badge
                    variant={
                      order.status === "success" ? "default" : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </td>
                <td className="p-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
