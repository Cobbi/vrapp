import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Monthly",
        data: [2.5, 4, 70, 5, 15, 12, 5, 2, 1.5, 2, 10],
        backgroundColor: "#000080",
        borderWidth: 0, 
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1200px", minHeight: "280px", margin: "2px"}}>
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 70,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
