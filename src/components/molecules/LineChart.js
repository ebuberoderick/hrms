"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

function LineChart() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

  const [chart, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 9,
          inverseColors: false,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [30, 100],
        },
      },

      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 29, 40, 50, 31],

        color: "#35C119",
      },
    ],
  });
  return (
    <div className="h-full">
      {typeof window !== "undefined" && (
        <Chart
          options={chart.options}
          series={chart.series}
          type="area"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}

export default LineChart;
