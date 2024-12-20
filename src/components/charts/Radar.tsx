"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = {
  Titanic: {
    sadness: 0.2629161837200324,
    fear: 0.03650888210783402,
    disgust: 0.04816332645714283,
    neutral: 0.1533376301328341,
    anger: 0.31115417275577784,
    surprise: 0.015013325726613402,
    joy: 0.17290648709361753,
  },
  "Die Hard": {
    anger: 0.5259427428245544,
    fear: 0.20700258761644363,
    disgust: 0.054536763578653336,
    neutral: 0.10442967712879181,
    sadness: 0.08315635193139315,
    surprise: 0.02271998766809702,
    joy: 0.0022119114291854203,
  },
  Saw: {
    disgust: 0.4127800092101097,
    neutral: 0.12750433385372162,
    fear: 0.17138978838920593,
    anger: 0.17016557976603508,
    sadness: 0.08964363485574722,
    surprise: 0.02657597092911601,
    joy: 0.0019406583160161972,
  },
};

function transformEmotionData() {
  const movies = Object.keys(data);
  // @ts-expect-error data is not typed
  const emotions = Object.keys(data[movies[0]]);

  return emotions.map((emotion) => ({
    emotion: emotion.charAt(0).toUpperCase() + emotion.slice(1),
    ...Object.fromEntries(
      movies.map((movie) => [
        movie.split(" (")[0],
        // @ts-expect-error data is not typed
        parseFloat((data[movie][emotion] * 100).toFixed(1)),
      ])
    ),
  }));
}

const chartData = transformEmotionData();

const chartConfig = {
  "Die Hard": {
    label: "Die Hard (1988)",
  },
  Titanic: {
    label: "Titanic (1997)",
  },
  Saw: {
    label: "Saw (2004)",
  },
} satisfies ChartConfig;

export function RadarPlot() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Emotion Distribution</CardTitle>
        <CardDescription>
          Comparing emotional distribution between movies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: 20,
              left: 20,
              right: 20,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="emotion" />
            <PolarGrid />
            <Radar
              name="Die Hard"
              dataKey="Die Hard"
              stroke="hsl(var(--anger))"
              fill="hsl(var(--anger))"
              fillOpacity={0.6}
            />
            <Radar
              name="Titanic"
              dataKey="Titanic"
              stroke="hsl(var(--sadness))"
              fill="hsl(var(--sadness))"
              fillOpacity={0.6}
            />
            <Radar
              name="Saw"
              dataKey="Saw"
              stroke="hsl(var(--disgust))"
              fill="hsl(var(--disgust))"
              fillOpacity={0.6}
            />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
