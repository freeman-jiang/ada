export interface Chart {
  data: Record<string, number | string>[];
  metadata: {
    title: string;
    x_label: string;
    y_label: string;
    x_key: string;
    y_key: string;
  };
}

export interface BarChartProps {
  chart: Chart;
}
