import React from "react";
import { Line } from "react-chartjs-2";

const YearlyChart = () => {
  const data = {
    labels: [
      "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"
    ],
    datasets: [
      {
        label: "Yearly",
        data: [5, 10, 15, 25, 25, 30, 35, 80, 45, 50, 55, 30, 65, 70, 75, 65],
        borderColor: "#4299E1",
        backgroundColor: "rgba(66, 153, 225, 0.3)",
        pointBackgroundColor: "#4299E1",
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1200px", minHeight: "280px", margin: "2px"}}>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};


export default YearlyChart