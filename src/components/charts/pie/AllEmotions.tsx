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
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { emotion: "neutral", value: 7386.44, fill: "hsl(var(--neutral))" },
  { emotion: "anger", value: 6687.6, fill: "hsl(var(--anger))" },
  { emotion: "disgust", value: 5987.81, fill: "hsl(var(--disgust))" },
  { emotion: "sadness", value: 5482.15, fill: "hsl(var(--sadness))" },
  { emotion: "fear", value: 5026.89, fill: "hsl(var(--chart-5))" },
  { emotion: "surprise", value: 1581.37, fill: "hsl(var(--surprise))" },
  { emotion: "joy", value: 1531.74, fill: "hsl(var(--joy))" },
];

const total = chartData.reduce((sum, item) => sum + item.value, 0);

const convertToPercentage = (value: number) => {
  return `${((value / total) * 100).toFixed(1)}%`;
};

const renderCustomLabel = ({ value }: { value: number }) => {
  return `${convertToPercentage(value)}`;
};

const chartConfig = {
  emotion: {
    label: "Emotion",
  },
  neutral: {
    label: "Neutral",
  },
  anger: {
    label: "Anger",
  },
  disgust: {
    label: "Disgust",
  },
  sadness: {
    label: "Sadness",
  },
  fear: {
    label: "Fear",
  },
  surprise: {
    label: "Surprise",
  },
  joy: {
    label: "Joy",
  },
} satisfies ChartConfig;

export function AllEmotions() {
  return (
    <Card className="flex flex-col my-4">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-2xl">
          Emotion Distribution Across All Movies
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square pb-0 [&_.recharts-pie-label-text]:fill-foreground [&_.recharts-pie-label-text]:text-base [&_.recharts-legend-item-text]:text-base max-h-96"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="emotion"
                label={renderCustomLabel}
                outerRadius={120}
              />
              <ChartLegend content={<ChartLegendContent nameKey="emotion" />} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm mt-4">
        <div className="leading-none text-muted-foreground">
          Distribution of emotional scores across all movie plots in the CMU
          dataset.
        </div>
      </CardFooter>
    </Card>
  );
}
