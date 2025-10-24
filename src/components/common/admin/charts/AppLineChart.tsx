import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@ui/chart";

const data = [
  { month: "Jan", activity: 65 },
  { month: "Feb", activity: 59 },
  { month: "Mar", activity: 80 },
  { month: "Apr", activity: 81 },
  { month: "May", activity: 56 },
  { month: "Jun", activity: 55 },
];

const chartConfig = {
  activity: {
    label: "Activity",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const AppLineChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full mt-4">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="activity"
          stroke="var(--color-activity)"
          strokeWidth={2}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default AppLineChart;
