import LineChartCartesian from "components/LineChartCartesian";

const data = [
  {
    name: "Profit A",
    profit: 10,
  },
  {
    name: "Profit B",
    profit: 40,
  },
  {
    name: "Profit C",
    profit: 20,
  },
  {
    name: "Profit D",
    profit: 50,
  },
  {
    name: "Profit E",
    profit: 30,
  },
  {
    name: "Profit F",
    profit: 80,
  },
];

const Profit = () => {
  return (
    <div className="bg-sec flex flex-col pt-5 px-7 rounded-md">
      <div className="text-base font-medium text-white">Profit</div>
      <div className="text-[28px] font-medium text-accg pb-5">8,24k</div>
      <LineChartCartesian data={data} className="-mx-3" />
    </div>
  );
};

export default Profit;
