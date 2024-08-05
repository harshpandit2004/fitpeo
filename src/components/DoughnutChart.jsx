import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Blue", "Grey"],
    datasets: [
      {
        label: "Goal Achieved",
        data: [70, 30],
        backgroundColor: ["#7394F7", "#2A3268"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutoutPercentage: "90%",

    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;
      const centerx = chart.getDatasetMeta(0).data[0].x;
      const centery = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = "bold 1rem Arial";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(data.datasets[0].data[0] + "%", centerx - 15, centery + 5);
    },
  };
  return (
    <div style={{ maxWidth: "7rem" }}>
      <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
    </div>
  );
};

export default DoughnutChart;
