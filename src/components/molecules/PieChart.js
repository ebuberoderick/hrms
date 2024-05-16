'use client'
import React, { useState } from 'react'
import Chart from 'react-apexcharts'

function PieChart({labels,series}) {
    const [chart, setChartData] = useState({
        options: {
            plotOptions: {
                pie: {
                    expandOnClick: false
                }
            },
            fill: {
                colors: ["#35C119","#ef4444","#112255","#FFFA49", '#E91E63', '#9C27B0']
            },
            colors: ["#35C119","#ef4444","#112255","#FFFA49", '#E91E63', '#9C27B0'],
            dataLabels: {
                enabled: false
            },
            legend: {
                position: 'bottom'
            },
            labels
        },
        colors: ["#35C119","#ef4444","#112255","#FFFA49", '#E91E63', '#9C27B0'],
        series
        
    })
    return (
        <div className="donut">
            <Chart options={chart.options} series={chart.series} type="pie" />
        </div>
    )
}

export default PieChart