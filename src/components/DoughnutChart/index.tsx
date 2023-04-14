import { PieChart, Pie, Cell } from "recharts";

interface IDoughnutChart {
  dataSales: {
    name: string;
    value: number;
  }[];
  dataOrders: {
    name: string;
    value: number;
  }[];
}

const DoughnutChart = ({ dataSales, dataOrders }: IDoughnutChart) => {
  const data = dataSales;

  const data2 = dataOrders;

  const COLORS = ["#1F2849", "#0BB885"];
  const COLORS2 = ["#1F2849", "#FF814A"];

  return (
    <PieChart
      className="-scale-x-100"
      width={140}
      height={140}
      margin={{ top: -130, right: 0, bottom: 0, left: -50 }}
    >
      <Pie
        data={data}
        cx={120}
        cy={200}
        startAngle={90}
        endAngle={-270}
        cornerRadius={10}
        innerRadius={57}
        outerRadius={70}
        stroke="none"
        fill="#8884d8"
        paddingAngle={-10}
        dataKey="value"
      >
        {data.map((_, idx) => (
          <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={data2}
        cx={120}
        cy={200}
        startAngle={90}
        endAngle={-270}
        cornerRadius={10}
        innerRadius={37}
        outerRadius={50}
        stroke="none"
        fill="#8884d8"
        paddingAngle={-10}
        dataKey="value"
      >
        {data.map((_, idx) => (
          <Cell key={`cell-${idx}`} fill={COLORS2[idx % COLORS2.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default DoughnutChart;
