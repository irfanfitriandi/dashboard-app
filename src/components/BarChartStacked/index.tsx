import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";

interface IBarChartStacked {
  data: {
    month: string;
    earning: number;
    expense: number;
  }[];
  className?: string;
}

const BarChartStacked = ({ data, className }: IBarChartStacked) => {
  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      stackOffset="sign"
      margin={{
        left: -30,
      }}
      barSize={7}
      className={className}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip
        contentStyle={{
          fontSize: 12,
          padding: `2px 5px 2px 5px`,
          backgroundColor: `rgb(255 255 255 / 0.9)`,
          color: "black",
          textAlign: "center",
        }}
      />
      <Bar
        dataKey="earning"
        fill="#0BB885"
        stackId="stack"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="expense"
        fill="#FF9F43"
        stackId="stack"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
};

export default BarChartStacked;
