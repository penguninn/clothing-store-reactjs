import { Pie, PieChart, Cell, Legend, Tooltip } from "recharts";
import { ChartContainer, type ChartConfig } from "../ui/chart";

const data = [
  { name: "Success", value: 400, color: "hsl(var(--chart-1))" },
  { name: "Failed", value: 100, color: "hsl(var(--chart-2))" },
  { name: "Pending", value: 50, color: "hsl(var(--chart-3))" },
];

const chartConfig = {
  success: {
    label: "Success",
    color: "hsl(var(--chart-1))",
  },
  failed: {
    label: "Failed",
    color: "hsl(var(--chart-2))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const AppPieChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Order Status</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default AppPieChart;
