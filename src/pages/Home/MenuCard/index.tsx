import Cost from "assets/MenuCardIcon/cost.svg";
import Trophy from "assets/MenuCardIcon/trophy.svg";
import Calendar from "assets/MenuCardIcon/calendar.svg";
import Revenue from "assets/MenuCardIcon/revenue.svg";
import Wallet from "assets/MenuCardIcon/wallet.svg";

const MAP_MENU_CARD = [
  {
    label: "Total Cost",
    img: Cost,
    val: "$31,868",
  },
  {
    label: "Total Sales",
    img: Trophy,
    val: "$66,053",
  },
  {
    label: "This Week",
    img: Calendar,
    val: "$35,000,00",
  },
  {
    label: "Revenue",
    img: Revenue,
    val: "$63,00K",
  },
  {
    label: "$1250",
    img: Wallet,
    val: "Last payment",
  },
];

const MenuCard = () => {
  return (
    <div className="flex gap-6 pt-8">
      {MAP_MENU_CARD.map((data, idx) => (
        <div
          key={idx}
          className="bg-sec flex items-center gap-5 basis-1/5 rounded-lg h-[100px] px-8 cursor-pointer hover:bg-accg hover:scale-110 group ease-in duration-300"
        >
          <img src={data.img} alt={data.label} />
          <div className="flex flex-col gap-[2px]">
            <div className="font-bold text-white text-base">{data.label}</div>
            <div className="text-sm text-[#6C747D] group-hover:text-white group-hover:font-semibold">
              {data.val}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
