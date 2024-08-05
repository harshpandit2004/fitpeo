import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./barchart.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: [
      "Jan-23",
      "Feb-23",
      "Mar-23",
      "Apr-23",
      "May-23",
      "Jun-23",
      "Jul-23",
      "Aug-23",
      "Sep-23",
      "Oct-23",
      "Nov-23",
      "Dec-23",
      "Jan-24",
      "Feb-24",
      "Mar-24",
      "Apr-24",
      "May-24",
      "Jun-24",
      "Jul-24",
      "Aug-24",
      "Sep-24",
      "Oct-24",
      "Nov-24",
      "Dec-24",
    ],
    datasets: [
      {
        label: "Activity",
        data: [
          55, 81, 34, 46, 48, 18, 61, 13, 33, 68, 32, 84, 8, 71, 61, 84, 50, 54,
          94, 3, 63, 65, 40, 95,
        ],
        backgroundColor: "#7293F7",
        borderColor: "#7293F7",
        borderRadius: {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 50,
          bottomRight: 50,
        },
        borderWidth: 0,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bar-chart">
      <h2 className="bar-chart-header" style={{}}>
        Activity
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
