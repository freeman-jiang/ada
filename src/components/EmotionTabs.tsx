"use client";
import { Bar, BarChart, Legend, ReferenceLine, XAxis, YAxis } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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
import { BarChartProps, Chart } from "@/types";
import { EMOTIONS_W_NEUTRAL } from "@/constants";
import { genreEmotion } from "@/content/data/genreEmotion";

const chartConfig = {} satisfies ChartConfig;

interface EmotionBarProps extends BarChartProps {
  average: number;
  emotion: string;
}

const emotionColors = {
  neutral: "hsl(var(--neutral))",
  anger: "hsl(var(--anger))",
  disgust: "hsl(var(--disgust))",
  sadness: "hsl(var(--sadness))",
  fear: "hsl(var(--fear))",
  surprise: "hsl(var(--surprise))",
  joy: "hsl(var(--joy))",
} as const;

function EmotionBar({ chart, average, emotion }: EmotionBarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{chart.metadata.title}</CardTitle>
        <CardDescription>
          Average: {(average * 100).toFixed(1)}%
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chart.data}
            layout="vertical"
            margin={{
              left: 30,
            }}
          >
            <YAxis
              dataKey={chart.metadata.x_key}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={120}
              interval={0}
            />
            <XAxis
              dataKey={chart.metadata.y_key}
              type="number"
              domain={[0, 32]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey={chart.metadata.y_key}
              layout="vertical"
              radius={6}
              fill={
                emotionColors[
                  emotion.toLowerCase() as keyof typeof emotionColors
                ]
              }
              name={emotion}
            />
            <ReferenceLine
              x={average * 100}
              stroke="hsl(var(--foreground))"
              strokeDasharray="3 3"
              label={{
                value: "Average",
                position: "top",
                fill: "hsl(var(--foreground))",
              }}
              name="Average"
            />
            <Legend />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export const EmotionTabs = () => {
  const prepareData = (emotion: string): Chart => {
    const data = Object.entries(genreEmotion[emotion.toLowerCase()])
      .filter(([key]) => key !== "count")
      .map(([genre, value]) => ({
        genre,
        value: Number(value) * 100, // Convert to percentage
      }));

    return {
      data,
      metadata: {
        title: `${emotion} Distribution Across Genres`,
        x_label: "Genre",
        y_label: "Percentage (%)",
        x_key: "genre",
        y_key: "value",
      },
    };
  };

  return (
    <Tabs defaultValue={EMOTIONS_W_NEUTRAL[0]} className="w-full">
      <TabsList>
        {EMOTIONS_W_NEUTRAL.map((emotion) => (
          <TabsTrigger key={emotion} value={emotion}>
            {emotion}
          </TabsTrigger>
        ))}
      </TabsList>
      {EMOTIONS_W_NEUTRAL.map((emotion) => (
        <TabsContent key={emotion} value={emotion}>
          <div className="w-full h-[32rem] relative">
            <EmotionBar
              chart={prepareData(emotion)}
              average={genreEmotion.average[emotion.toLowerCase()]}
              emotion={emotion}
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
