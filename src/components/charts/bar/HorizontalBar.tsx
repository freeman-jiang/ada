"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {} satisfies ChartConfig;

interface Props {
  chart: {
    data: Record<string, number | string>[];
    metadata: {
      title: string;
      x_label: string;
      y_label: string;
      x_key: string;
      y_key: string;
    };
  };
}

export function HorizontalBar({ chart }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chart.metadata.title}</CardTitle>
        <CardDescription>Compared to Neutral Emotion</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chart.data}
            layout="vertical"
            margin={{
              left: 10,
            }}
          >
            <YAxis
              dataKey={chart.metadata.x_key}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey={chart.metadata.y_key} type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey={chart.metadata.y_key}
              layout="vertical"
              radius={6}
              fill="hsl(var(--chart-1))"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
