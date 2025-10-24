import { useEffect, useState } from "react";
import AppBarChart from "@common/admin/charts/AppBarChart";
import AppPieChart from "@common/admin/charts/AppPieChart";
import AppAreaChart from "@common/admin/charts/AppAreaChart";
import { DataTable } from "@common/admin/tables/DataTable";
import { dashboardProductColumns } from "@common/admin/tables/DashboardProductColumns";
import { dashboardOrderColumns } from "@common/admin/tables/DashboardOrderColumns";
import TodoList from "@common/admin/TodoList";
import { mockOrderChartData } from "@constants/mock/orderChart";
import { mockProducts } from "@constants/mock/products";
import { mockOrders } from "@constants/mock/orders";
import type { OrderChartType } from "@types";

const Dashboard = () => {
  const [chartData, setChartData] = useState<OrderChartType[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setChartData(mockOrderChartData);
  }, []);

  const popularProducts = mockProducts.slice(0, 5);
  const latestOrders = mockOrders.slice(0, 5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart data={chartData} />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-lg font-medium mb-4">Latest Transactions</h1>
        <DataTable columns={dashboardOrderColumns} data={latestOrders} />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-lg font-medium mb-4">Popular Products</h1>
        <DataTable columns={dashboardProductColumns} data={popularProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
