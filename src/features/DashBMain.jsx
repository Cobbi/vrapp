import React, { useState } from "react";
import Card from "@/src/components/Card";
import InsightsCard from "./InsightsCard";
import OverviewCard from "./OverviewCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import DailyChart from "./DailyChart";
import MonthlyChart from "./MonthlyChart";
import YearlyChart from "./YearlyChart";

const DashBMain = () => {
  const card1 = {
    title: "Total visits",
    value: 15,
  };
  const card2 = {
    title: "Active visits",
    value: 7,
  };
  const card3 = {
    title: "New enquires",
    value: 4,
  };
  const card4 = {
    title: "New documents",
    value: 0,
  };

  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("Months");

  // Function to handle option change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to render the chart based on the selected option
  const renderChart = () => {
    if (selectedOption === "Daily") {
      return <DailyChart />;
    } else if (selectedOption === "Months") {
      return <MonthlyChart />;
    } else if (selectedOption === "Years") {
      return <YearlyChart />;
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="flex w-full py-8 px-12">
        <div className="w-3/5">
          <h1 className="text-2xl font-medium pb-4">Dashboard</h1>
          <p className="text-blue-700 text-[20px]">Today's overview</p>
        </div>
        <div className="flex w-2/5 justify-between items-center gap-x-2">
          <div className="relative flex items-center">{/* <Search /> */}</div>
          <div className="relative text-3xl text-slate-500 rounded-2xl border border-slate-300 border-solid px-2 py-2 pb-[-4px]">
            <IoMdNotificationsOutline />
            {/* Rounded yellow circle */}
            <div className="w-3 h-3 rounded-full bg-yellow-400 absolute top-1 -right-1" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col px-12 py-4">
        <div className="w-full flex justify-between">
          <div className="md:w-2/5">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="w-[260px]">
                <Card title={card1.title} value={card1.value} />
              </div>
              <div className="w-[260px]">
                <Card title={card2.title} value={card2.value} />
              </div>
              <div className="w-[260px]">
                <Card title={card3.title} value={card3.value} />
              </div>
              <div className="w-[260px]">
                <Card title={card4.title} value={card4.value} />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <InsightsCard />
          </div>
        </div>
        <div className="w-full flex mt-12 px-12 pt-8 justify-between bg-slate-50 shadow-md rounded-3xl border border-gray-300">
          <div className="w-full h-[300px] rounded-md">
            {/* Render the selected chart */}
            {renderChart()}
          </div>
          <div className="w-full md:w-[180px] sm:w-[240px] px-4 mb-4 p-4">
          <select
            id="selectOption"
            name="select"
            value={selectedOption}
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-indigo-500"
            onChange={handleOptionChange}
          >
            {/* Set "Months" as the default selected option */}
            <option value="Daily">Days</option>
            <option value="Months">Months</option>
            <option value="Years">Years</option>
          </select>
        </div>
        </div>
      </div>
    </>
  );
};

export default DashBMain;
