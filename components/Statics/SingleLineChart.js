import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);
import style from "../../styles/Statics.module.css";
import { useTheme } from "../../lib/ThemeContext";

function SingleLineChart({ mydata, title }) {
  const { theme, setTheme, my } = useTheme();
  const lightTheme = theme == "Light";

  const data = {
    datasets: [
      {
        data: mydata,
        tension: 0.4,
        segment: {
          borderColor: lightTheme ? undefined : "#69F9BD",
        },
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
        color: lightTheme ? undefined : "#5F98C7",
      },
    },
    scales: {
      x: {
        type: "time",
        ticks: { maxTicksLimit: 3, color: lightTheme ? undefined : "#fff" },
        time: {
          unit: "day",
        },
        grid: {
          display: false,
          borderWidth: 0,
        },
      },
      y: {
        ticks: { color: lightTheme ? undefined : "#fff" },
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
