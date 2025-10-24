import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { DataTable } from "@common/admin/tables/DataTable";
import { orderColumns } from "@common/admin/tables/OrderColumns";
import { mockOrders } from "@constants/mock/orders";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select";
import AddOrderDialog from "@common/admin/AddOrderDialog";
import type { OrderType } from "@types";

const OrdersPage = () => {
  const [tableData, setTableData] = useState<OrderType[]>(mockOrders);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const handleAddOrder = (newOrder: Omit<OrderType, "_id" | "createdAt" | "updatedAt">) => {
    const order: OrderType = {
      ...newOrder,
      _id: `order_${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTableData([order, ...tableData]);
    setIsAddDialogOpen(false);
  };

  const handleEditOrder = (updatedOrder: OrderType) => {
    setTableData(tableData.map((o) => (o._id === updatedOrder._id ? updatedOrder : o)));
  };

  const handleDeleteOrder = (id: string) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setTableData(tableData.filter((o) => o._id !== id));
    }
  };

  // Filtering & Search
  const filteredOrders = tableData.filter((order) => {
    const matchesSearch =
      order._id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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

      {/* Search & Filter */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={orderColumns(handleEditOrder, handleDeleteOrder)}
        data={filteredOrders}
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
