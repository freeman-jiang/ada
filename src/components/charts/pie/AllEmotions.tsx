"use client";

import { Pie, PieChart, ResponsiveContainer, Legend } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { emotion: "Neutral", value: 7386.44, fill: "hsl(var(--neutral))" },
  { emotion: "Anger", value: 6687.6, fill: "hsl(var(--anger))" },
  { emotion: "Disgust", value: 5987.81, fill: "hsl(var(--disgust))" },
  { emotion: "Sadness", value: 5482.15, fill: "hsl(var(--sadness))" },
  { emotion: "Fear", value: 5026.89, fill: "hsl(var(--chart-5))" },
  { emotion: "Surprise", value: 1581.37, fill: "hsl(var(--surprise))" },
  { emotion: "Joy", value: 1531.74, fill: "hsl(var(--joy))" },
];

const total = chartData.reduce((sum, item) => sum + item.value, 0);

const convertToPercentage = (value: number) => {
  return `${((value / total) * 100).toFixed(1)}%`;
};

const renderCustomLabel = ({ value }: { value: number }) => {
  return `${convertToPercentage(value)}`;
};

const chartConfig = {
  value: { label: "Emotion" },
} satisfies ChartConfig;

export function AllEmotions() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-4">
        <CardTitle>Emotion Distribution Across All Movies</CardTitle>
        {/* <CardDescription>Emotional Analysis Results</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square pb-0 [&_.recharts-pie-label-text]:fill-foreground max-h-96"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* <ChartTooltip
                content={
                  <ChartTooltipContent
                    hideLabel
                    // formatter={(value) => {
                    //   return convertToPercentage(value);
                    // }}
                  />
                }
              /> */}
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="emotion"
                label={renderCustomLabel}
                outerRadius={140}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm mt-4">
        <div className="leading-none text-muted-foreground">
          Distribution of emotional scores across all analyzed content
        </div>
      </CardFooter>
    </Card>
  );
}
