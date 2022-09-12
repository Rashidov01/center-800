import Chart from "react-apexcharts";
import React from "react";

function ApexChart() {
  const state = {
    series: [
      {
        name: "plan",
        data: [22, 55, 66],
      },
      {
        name: "done",
        data: [88, 5, 66],
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
      },
      xaxis: {
        type: "datetime",
        categories: [12, 3, 6],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
    },
  };
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="line"
      height={240}
    />
  );
}
export default ApexChart;
