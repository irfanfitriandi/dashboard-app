import { CartesianGrid, LineChart, Line, Tooltip } from "recharts";

interface ILineChartCartesian {
  data: {
    name: string;
    profit: number;
  }[];
  className?: string;
}

const LineChartCartesian = ({ data, className }: ILineChartCartesian) => {
  return (
    <LineChart width={120} height={80} data={data} className={className}>
      <CartesianGrid strokeDasharray="3" stroke="#0A1826" />
      <Tooltip
        contentStyle={{
          fontSize: 12,
          padding: `2px 5px 2px 5px`,
          backgroundColor: `rgb(255 255 255 / 0.9)`,
          color: "black",
          textAlign: "center",
        }}
      />
      <Line
        type="linear"
        dataKey="profit"
        stroke="#0BB885"
        activeDot={{ r: 3 }}
      />
      <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartCartesian;
