import BarC from "components/BarChart";

const data = [
  {
    name: "Order A",
    orders: 80,
  },
  {
    name: "Order B",
    orders: 189,
  },
  {
    name: "Order C",
    orders: 100,
  },
  {
    name: "Order D",
    orders: 60,
  },
  {
    name: "Order E",
    orders: 140,
  },
];

const Orders = () => {
  return (
    <div className="bg-sec flex flex-col ite pt-5 px-7 rounded-md basis-[30%]">
      <div className="text-base font-medium text-white">Orders</div>
      <div className="text-[28px] font-medium text-acco pb-5">189k</div>
      <BarC data={data} className="mx-auto" />
    </div>
  );
};

export default Orders;
