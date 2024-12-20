import { PieChartCard } from "./PieChartCard";

const data = {
  "English Language": 40914,
  "Hindi Language": 3745,
  "Spanish Language": 3675,
  "French Language": 3422,
  "Silent film": 3183,
  "Italian Language": 2534,
  "Japanese Language": 2297,
  "German Language": 2259,
  "Tamil Language": 1896,
  "Malayalam Language": 1448,
  "Standard Mandarin": 1214,
  "Telugu language": 1197,
  "Russian Language": 1025,
  Cantonese: 876,
  "Korean Language": 779,
  Other: 10882,
};

export const LanguagePie = () => {
  return <PieChartCard data={data} title="Top 15 Movie Languages" />;
};
