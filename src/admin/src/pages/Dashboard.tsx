import { useEffect, useState } from "react";
import AppBarChart from "../components/charts/AppBarChart";
import AppPieChart from "../components/charts/AppPieChart";
import AppAreaChart from "../components/charts/AppAreaChart";
import CardList from "../components/CardList";
import TodoList from "../components/TodoList";
import { mockOrderChartData, mockProducts, mockOrders } from "../data/mockData";
import { OrderChartType } from "../types";

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
        <CardList title="Latest Transactions" orders={latestOrders} />
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
        <CardList title="Popular Products" products={popularProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
