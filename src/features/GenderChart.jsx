import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const GenderChart = () => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        // Example data, replace with your actual data
        data: [60, 40,], 
        backgroundColor: ["#0000FF", "#ADFF2F"],
      },
    ],
  };

  return (
    <div className="flex items-center">
      {/* Gender pie chart */}
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <Pie
          data={data}
          options={{
            responsive: true,
            layout: {
              padding: {
                left: 50,
                right: 50,
              },
            }, plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      const label = data.labels[context.dataIndex];
                      const value = data.datasets[0].data[context.dataIndex];
                      return `${label} = ${value}%`;
                    },
                  },
                },
              },
            }}
          />
        </div>
      {/* Labels at the right-hand side */}
      <div className="pl-4">
        <ul>
          {data.labels.map((label, index) => (
            <li key={index} className="flex items-center my-2">
              <span
                className="w-4 h-4 mr-2 rounded-none shadow-md"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              ></span>
              <span className="text-[18px]">{label}</span>&nbsp;  = &nbsp;<span className="text-[16px] font-semibold text-blue-700">{data.datasets[0].data[index]}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenderChart;
