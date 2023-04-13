import ProfitChart from "assets/Charts/profit_chart.svg";

const Profit = () => {
  return (
    <div className="bg-sec flex flex-col pt-5 px-7 rounded-md">
      <div className="text-base font-medium text-white">Profit</div>
      <div className="text-[28px] font-medium text-accg pb-8">8,24k</div>
      <img src={ProfitChart} alt="Profit chart" className="cursor-pointer" />
    </div>
  );
};

export default Profit;
