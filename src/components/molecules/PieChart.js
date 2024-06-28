"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

function PieChart({ labels, series }) {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const [chart, setChartData] = useState({
    options: {
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      fill: {
        colors: [
          "#35C119",
          "#ef4444",
          "#112255",
          "#FFFA49",
          "#E91E63",
          "#9C27B0",
        ],
      },
      colors: [
        "#35C119",
        "#ef4444",
        "#112255",
        "#FFFA49",
        "#E91E63",
        "#9C27B0",
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
      },
      labels,
    },
    colors: ["#35C119", "#ef4444", "#112255", "#FFFA49", "#E91E63", "#9C27B0"],
    series,
  });
  return (
    <div className="donut">
      {typeof window !== "undefined" && (
        <Chart
          options={chart.options}
          series={chart.series}
          type="donut"
          width="100%"
          height=""
        />
      )}
    </div>
  );
}

export default PieChart;
