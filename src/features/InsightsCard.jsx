import React, { useState } from "react";
import PurposeChart from "./PurposeChart";
import GenderChart from "./GenderChart";
import EnquiriesChart from "./EnquiriesChart";

const InsightsCard = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("Purpose");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to render the chart based on the selected option
  const renderChart = () => {
    if (selectedOption === "Purpose") {
      return <PurposeChart />;
    } else if (selectedOption === "Gender") {
      return <GenderChart />;
    } else if (selectedOption === "Enquiry") {
      return <EnquiriesChart />;
    } else {
      return null;
    }
  };

  return (
    <div className="ml-12 pl-8 flex flex-col bg-slate-50 shadow-md rounded-3xl border border-gray-300">
      <div className="h-[324px]">
        <div className="flex px-8 pt-4 justify-between">
          <h1 className="text-blue-700 text-xl">Quick insights</h1>
          <div>
            <select
              id="selectOption"
              name="select"
              value={selectedOption}
              className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-indigo-500"
              onChange={handleOptionChange}
            >
              {/* Set "Purpose" as the default selected option */}
              <option value="Purpose">Purpose</option>
              <option value="Gender">Gender</option>
              <option value="Enquiry">Enquiry</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {/* Render the selected chart */}
          {renderChart()}
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;
