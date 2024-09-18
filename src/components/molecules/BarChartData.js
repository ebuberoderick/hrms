"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

function BarChartData({dae,color}) {
    const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

    const [chart, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: dae[0]
            }
        },
        series: [
            {
                name: "series-1",
                data: dae[1],
                color:color
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

export default BarChartData;
