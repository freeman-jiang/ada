"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

export function VerticalBar({ chart }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chart.metadata.title}</CardTitle>
        <CardDescription>Compared to Neutral Emotion</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chart.data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={chart.metadata.x_key}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={chart.metadata.y_key} radius={8} fill="#8884d8" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
