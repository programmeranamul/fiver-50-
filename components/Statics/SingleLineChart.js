// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";
// const SingleLineChart = () => {
//   const canvasEl = useRef(null);

//   const colors = {
//     purple: {
//       default: "rgba(149, 76, 233, 1)",
//       half: "rgba(149, 76, 233, 0.5)",
//       quarter: "rgba(149, 76, 233, 0.25)",
//       zero: "rgba(149, 76, 233, 0)",
//     },
//     indigo: {
//       default: "rgba(80, 102, 120, 1)",
//       quarter: "rgba(80, 102, 120, 0.25)",
//     },
//   };

//   useEffect(() => {
//     const ctx = canvasEl.current.getContext("2d");
//     // const ctx = document.getElementById("myChart");

//     const gradient = ctx.createLinearGradient(0, 16, 0, 600);
//     gradient.addColorStop(0, colors.purple.half);
//     gradient.addColorStop(0.65, colors.purple.quarter);
//     gradient.addColorStop(1, colors.purple.zero);

//     const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

//     const labels = [
//       "Week 1",
//     ];
//     const data = {
//       labels: labels,
//         datasets: [{
//           label: 'My First Dataset',
//           data: [65, 59, 80, 81, 56, 55, 40],
//           fill: false,
//           tension: 0.1
//         }]
//     };
//     const config = {
//       type: "line",
//       data: data,
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Value",
//         },
//         suggestedMin: -10,
//         suggestedMax: 200,
//       },
//     };
//     const myLineChart = new Chart(ctx, config);

//     return function cleanup() {
//       myLineChart.destroy();
//     };
//   });
//   return (
//     <div>
//       <span>Chart.js Demo</span>
//       <canvas id="myChart" ref={canvasEl} height="100" />
//     </div>
//   );
// };

// export default SingleLineChart;

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Line, defaults } from "react-chartjs-2";
const SingleLineChart = () => {
  return (
    <div>
      <span>Chart.js Demo</span>
      <Line
        // data={{
        //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        // //   datasets: [
        // //     {
        // //       label: "# of votes",
        // //       data: [12, 19, 3, 5, 2, 3],
        // //       backgroundColor: [
        // //         "rgba(255, 99, 132, 0.2)",
        // //         "rgba(54, 162, 235, 0.2)",
        // //         "rgba(255, 206, 86, 0.2)",
        // //         "rgba(75, 192, 192, 0.2)",
        // //         "rgba(153, 102, 255, 0.2)",
        // //         "rgba(255, 159, 64, 0.2)",
        // //       ],
        // //     //   borderColor: [
        // //     //     "rgba(255, 99, 132, 1)",
        // //     //     "rgba(54, 162, 235, 1)",
        // //     //     "rgba(255, 206, 86, 1)",
        // //     //     "rgba(75, 192, 192, 1)",
        // //     //     "rgba(153, 102, 255, 1)",
        // //     //     "rgba(255, 159, 64, 1)",
        // //     //   ],
        // //       borderWidth: 1,
        // //     },
        // //     // {
        // //     //   label: 'Quantity',
        // //     //   data: [47, 52, 67, 58, 9, 50],
        // //     //   backgroundColor: 'orange',
        // //     //   borderColor: 'red',
        // //     // },
        // //   ],
        // }}
        // height={200}
        // width={600}
        // options={{

        //   legend: {
        //     labels: {
        //       fontSize: 25,
        //     },
        //   },

        // }}
        // const
        data={{
          labels: "labels",
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              tension: 0.1,
              backgroundColor: "red",
              pointBackgroundColor: "red",
              pointHoverBorderWidth: 3,
            },
          ],
        }}
        

        options={{
            scales: {
              y:{
                beginAtZero:true,
                grid:{
                    display:"none"
                }
              }
            }
        }}
          
      />
    </div>
  );
};

export default SingleLineChart;   

