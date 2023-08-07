import React from 'react'
import { Bar } from "react-chartjs-2";

const BarDailyChart = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Days",
            data: [2, 12, 8, 21, 15, 12, 92],
            backgroundColor: "#4299E1",
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
                },
              },
            }}
          />
        </div>
      );
    };

export default BarDailyChart