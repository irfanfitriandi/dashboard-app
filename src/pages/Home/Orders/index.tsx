import OrdersChart from "assets/Charts/orders_chart.svg";

const Orders = () => {
  return (
    <div className="bg-sec flex flex-col pt-5 px-7 rounded-md">
      <div className="text-base font-medium text-white">Orders</div>
      <div className="text-[28px] font-medium text-acco pb-8">189k</div>
      <img src={OrdersChart} alt="Orders chart" className="cursor-pointer" />
    </div>
  );
};

export default Orders;
