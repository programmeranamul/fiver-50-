
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,TimeScale,
  Title,
  Tooltip,
  Legend
);
import style from "../../styles/Statics.module.css";



function SingleLineChart({ mydata, title }) {
  const data = {
    datasets: [
      {
        data: mydata,
        tension: 0.4,
        // pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        type: "time",
        ticks: { maxTicksLimit: 3 },
        time: {
          unit: "day",
        },
        grid: {
          display: false,
          borderWidth: 0,
        },
      },
      y: {
        ticks: {},
        grid: {
          display: false,
          borderWidth: 0,
        },
      },
    },
  };

  return (
    <div className={style.my_chart}>
      <Line options={options} data={data} />
    </div>
  );
}

export default SingleLineChart;
