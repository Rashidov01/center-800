import Chart from "react-apexcharts";
import React from "react";

function ApexChart() {
  const data1 = [1, 2, 3, 4, 5, 6, 7];
  const data2 = [11, 22, 33, 44, 55, 66, 77];
  const data3 = [40, 80, 120, 160, 200, 240, 280];
  const state = {
    series: [
      {
        name: "Reja",
        data: data1,
      },
      {
        name: "Bajarildi",
        data: data2,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: data3,
        type: "datetime",

        labels: {
          format: "dd/MM",
        },
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value;
          },
        },
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0,
        },
      },
      tooltip: {
        x: {
          format: "DD/MM",
        },
      },
    },
  };
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="area"
      height={400}
    />
  );
}
export default ApexChart;
