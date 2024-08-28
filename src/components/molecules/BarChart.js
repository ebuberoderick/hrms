"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

function BarChart() {
    const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

    const [chart, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["Data Analyst", "CSE","Android Programmer","Senior Programmer"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [4.2,8.2,2.2,5.9],
                color: "#005300"
            },
        ],
    });
    return (
        <div className="h-full">
            {typeof window !== "undefined" && (
                <Chart
                    options={chart.options}
                    series={chart.series}
                    type="bar"
                    width="100%"
                    height="100%"
                />
            )}
        </div>
    );
}

export default BarChart;
