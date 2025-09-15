import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";

const data = [
  { name: "Jan", income: 3500, momGrowth: 10 },
  { name: "Feb", income: 4700, momGrowth: 25 },
  { name: "Mar", income: 6800, momGrowth: 30 },
  { name: "Apr", income: 3000, momGrowth: -40 },
  { name: "May", income: 5000, momGrowth: 55 },
  { name: "Jun", income: 0, momGrowth: -100 },
];

const IncomeChart: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-2xl border border-gray-300">
      <h2 className="text-lg text-gray-500 font-semibold">Income Trend</h2>
      <p className="text-sm text-gray-500 mb-4">
        Your monthly income and growth for the last 6 months.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X Axis */}
          <XAxis dataKey="name" />

          {/* Left Y Axis (Purple for Income) */}
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#9C27B0"
            tick={{ fill: "#6B7280" }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />

          {/* Right Y Axis (Brown for Growth) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#6A1B09"
            tick={{ fill: "#6B7280" }}
            tickFormatter={(value) => `${value}%`}
          />

          {/* Tooltip & Legend */}
          <Tooltip />
          <Legend />

          {/* Indigo Bar - Income */}
          <Bar yAxisId="left" dataKey="income" fill="#A642EE" name="Income" />

          {/* Brown Line - MoM Growth */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="momGrowth"
            stroke="#6A1B09"
            name="MoM Growth"
            dot={{ stroke: "#6A1B09", fill: "#fff" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;
