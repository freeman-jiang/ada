"use client";

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
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
import { capitalize } from "@/lib/utils";

interface ChartMetadata {
  title?: string;
  orientation: "vertical" | "horizontal";
  xKey: string;
  yKey: string;
}

interface Props {
  metadata: ChartMetadata;
  data: Array<Record<string, any>>;
  color?: string;
}

export function BarPlot({
  metadata,
  data,
  color = "hsl(var(--chart-1))",
}: Props) {
  const { title, xKey, yKey, orientation } = metadata;
  const vertical = orientation === "vertical";

  const chartConfig = {
    [yKey]: {
      label: capitalize(yKey),
      color: color,
    },
  } satisfies ChartConfig;

  const longestLabelLength = data
    .map((c) => c[xKey])
    .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title || "Chart"}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout={vertical ? "vertical" : "horizontal"}
              margin={{
                left: vertical ? longestLabelLength * 2.5 : 0,
                bottom: vertical ? 0 : longestLabelLength * 2.5,
              }}
            >
              <XAxis
                type={vertical ? "number" : "category"}
                dataKey={vertical ? yKey : xKey}
                hide={vertical}
                angle={-45}
                width={100}
                textAnchor="end"
              />
              <YAxis
                type={vertical ? "category" : "number"}
                dataKey={vertical ? xKey : yKey}
                tickLine={vertical}
                tickMargin={10}
                axisLine={vertical}
                interval={"preserveStartEnd"}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey={yKey} fill={`var(--color-${yKey})`} radius={5} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
