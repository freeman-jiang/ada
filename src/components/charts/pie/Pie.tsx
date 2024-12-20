"use client";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface PieChartProps {
  data: Record<string, number>;
  title: string;
  description?: string;
}

const COLORS = [
  "#2563eb",
  "#dc2626",
  "#16a34a",
  "#9333ea",
  "#ea580c",
  "#0891b2",
  "#4f46e5",
  "#be123c",
  "#15803d",
  "#7c2d12",
  "#86198f",
  "#1e40af",
  "#b91c1c",
  "#115e59",
  "#581c87",
  "#c2410c",
];

export function PieChartCard({ data, title, description }: PieChartProps) {
  const chartData = Object.entries(data).map(([key, value], index) => ({
    name: key,
    value,
    fill: COLORS[index % COLORS.length],
  }));

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  const convertToPercentage = (value: number) => {
    return `${((value / total) * 100).toFixed(1)}%`;
  };

  const renderCustomLabel = ({ value }: { value: number }) => {
    return `${convertToPercentage(value)}`;
  };

  const chartConfig = chartData.reduce((acc, { name }) => {
    acc[name] = { label: name };
    return acc;
  }, {} as Record<string, { label: string }>);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square pb-0 [&_.recharts-pie-label-text]:fill-foreground [&_.recharts-pie-label-text]:text-xs [&_.recharts-legend-item-text]:text-base"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                label={renderCustomLabel}
                outerRadius={200}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              {/* <Legend className="text-xs mt-2" /> */}
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      {description && (
        <CardFooter className="flex-col gap-2 text-sm mt-4">
          <div className="leading-none text-muted-foreground">
            {description}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
