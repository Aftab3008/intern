"use client";

import { formatNumber } from "@/lib/utils";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface CoinData {
  name: string;
  marketCap: string;
  color: string;
}

export default function PieCharts({ data }: { data: CoinData[] }) {
  const formattedData = data.map((coin) => ({
    name: coin.name,
    value: parseFloat(coin.marketCap),
    color: coin.color,
  }));

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
          <Pie
            data={formattedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${formatNumber(value)}`}
          >
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => formatNumber(value)} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
