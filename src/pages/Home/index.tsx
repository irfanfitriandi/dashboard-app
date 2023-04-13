import { useState } from "react";

import Layout from "components/Layout";
import MenuCard from "./MenuCard";
import Earnings from "./Earnings";
import Orders from "./Orders";
import Profit from "./Profit";
import TotalProfit from "./TotalProfit";
import ActivityOverview from "./ActivityOverview";

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Layout>
      {/* Title Page */}
      <div className="flex flex-col gap-3 cursor-pointer">
        <h1 className="text-white text-3xl font-semibold">
          Marketing Dashboard
        </h1>
        <div className="text-[#6C747D]">
          Home / <span className="text-accg">Dashboard</span>
        </div>
      </div>
      {/* MenuCard */}
      <MenuCard />
      {/* Component Chart */}
      <div className="flex gap-6 pt-6">
        <div className="basis-3/5 flex flex-col gap-5">
          {/* Component Left Top - Earnings Orders Profit */}
          <div className="h-[220px] flex gap-4">
            <Earnings
              showDropdown={showDropdown}
              handleShowDropdown={() => setShowDropdown(!showDropdown)}
            />
            <Orders />
            <Profit />
          </div>
          {/* Component Left Bottom - Total Profit */}
          <TotalProfit />
        </div>
        {/* Component Rigth - Activity */}
        <div className="basis-2/5 flex">
          <ActivityOverview />
        </div>
      </div>
    </Layout>
  );
};

export default App;
