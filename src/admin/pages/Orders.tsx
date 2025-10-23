import { useState } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "../components/tables/DataTable";
import { orderColumns } from "../components/tables/OrderColumns";
import { mockOrders } from "../data/mockData";
import { Button } from "../components/ui/button";
import AddOrderDialog from "../components/AddOrderDialog";
import type { OrderType } from "../types";

const OrdersPage = () => {
  const [ordersData, setOrdersData] = useState<OrderType[]>(mockOrders);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddOrder = (newOrder: Omit<OrderType, "_id" | "createdAt" | "updatedAt">) => {
    const order: OrderType = {
      ...newOrder,
      _id: `order_${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setOrdersData([order, ...ordersData]);
    setIsAddDialogOpen(false);
  };

  const handleEditOrder = (updatedOrder: OrderType) => {
    setOrdersData(ordersData.map((o) => (o._id === updatedOrder._id ? updatedOrder : o)));
  };

  const handleDeleteOrder = (id: string) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setOrdersData(ordersData.filter((o) => o._id !== id));
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-sm text-muted-foreground">
            Manage customer orders
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Order
        </Button>
      </div>

      <DataTable
        columns={orderColumns(handleEditOrder, handleDeleteOrder)}
        data={ordersData}
      />

      <AddOrderDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddOrder={handleAddOrder}
      />
    </div>
  );
};

export default OrdersPage;
