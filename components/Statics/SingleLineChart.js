
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import style from "../../styles/Statics.module.css";


const labels = ['January', 'February', 'March', ];



 function SingleLineChart({mydata, title}) {


  const data = {
    labels,
    datasets: [
      {      
        data: mydata,
        tension:0.4,
        pointRadius:0
      
      }
      
    ],
  };


  const options = {
    // maintainAspectRatio:true,
    // aspectRatio: 1,
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
        // ticks:{ display: false},
        grid: {
          display: false  ,
          borderWidth: 0 ,  
        }
      },
      y: {
        // ticks:{ display: false},
        ticks: {
          
        },
        grid: {
          display: false  ,
          borderWidth: 0    
        }
      }
    }
  };
  


  return <div className={style.my_chart}>
     <Line options={options} data={data} />
  </div>;
}


export default SingleLineChart
