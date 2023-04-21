import ChevronDown from "assets/chevron_down.svg";
import BarChartStacked from "components/BarChartStacked";
import ReportChart from "assets/Charts/report_chart.svg";

const data = [
  {
    month: "Jan",
    earning: 120,
    expense: -180,
  },
  {
    month: "Feb",
    earning: 220,
    expense: -90,
  },
  {
    month: "Mar",
    earning: 330,
    expense: -50,
  },
  {
    month: "Apr",
    earning: 300,
    expense: -220,
  },
  {
    month: "May",
    earning: 125,
    expense: -150,
  },
  {
    month: "Jun",
    earning: 50,
    expense: -50,
  },
  {
    month: "July",
    earning: 220,
    expense: -110,
  },
  {
    month: "Aug",
    earning: 270,
    expense: -80,
  },
  {
    month: "Sep",
    earning: 90,
    expense: -130,
  },
];

const TotalProfit = () => {
  return (
    <div className="bg-sec flex pt-5 rounded-md">
      <div className="flex flex-col basis-4/6 gap-9 pb-6 border-r border-[#2E4B85] px-5 -mt-5">
        <div className="flex justify-between pt-5">
          <div className="text-white font-bold">Total profit</div>
          <div className="flex gap-6 text-sm text-[#828282]">
            <div className="flex items-center gap-2">
              <span className="w-[10px] h-[10px] rounded-full bg-accg" />
              Earning
            </div>
            <div className="flex items-center gap-2">
              <span className="w-[10px] h-[10px] rounded-full bg-acco" />
              Expense
            </div>
          </div>
        </div>
        <BarChartStacked
          data={data}
          className="text-[11px] font-semibold mx-auto"
        />
      </div>
      <div className="flex flex-col items-center basis-2/6 mx-auto">
        <div className="flex gap-2 py-1 px-2 text-accg text-xs font-semibold border border-accg rounded-[5px] cursor-pointer">
          2023 <img src={ChevronDown} alt="Chevron down" />
        </div>
        <div className="text-3xl font-bold text-white mt-[60px]">$842.98</div>
        <div className="text-xs font-semibold text-[#828282] mt-3">
          Latest Month Balance $426.20k
        </div>
        <div className="flex w-full justify-end my-3 px-4">
          <img
            src={ChevronDown}
            alt="Chevron down"
            className="cursor-pointer"
          />
        </div>
        <img src={ReportChart} alt="Report chart" className="cursor-pointer" />
        <button
          type="button"
          className="mt-12 bg-accg rounded-[5px] py-2 px-5 text-sm font-bold text-white"
        >
          View Report
        </button>
      </div>
    </div>
  );
};

export default TotalProfit;
