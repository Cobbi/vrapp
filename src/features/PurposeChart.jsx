import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const PurposeChart = () => {
  const data = {
    labels: ["Interviews", "Official Visits", "Unofficial Visits", "Enquiries"],
    datasets: [
      {
        data: [55, 19, 15, 16],
        backgroundColor: ["#00008B", "#FFFF00", "#90EE90", "#FFCCCB"],
      },
    ],
  };

  return (
    <div className="flex justify-center items-center">
      <div style={{ maxWidth: "300px" }}>
        <Pie
          data={data}
          options={{
            responsive: true,
            layout: {
              padding: {
                left: 50,
                right: 50,
              },
            },
            plugins: {
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
      <div style={{ maxWidth: "220px", marginLeft: "20px" }}>
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

export default PurposeChart;
