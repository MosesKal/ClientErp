import React, { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";

const TrafficChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current.getEchartsInstance();

    const options = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 1048,
              name: "Search Engine",
            },
            {
              value: 735,
              name: "Direct",
            },
            {
              value: 580,
              name: "Email",
            },
            {
              value: 484,
              name: "Union Ads",
            },
            {
              value: 300,
              name: "Video Ads",
            },
          ],
        },
      ],
    };

    chartInstance.setOption(options);
  }, []);

  return (
    <div>
      <ReactECharts ref={chartRef} option={{}} style={{ height: "400px" }} />
    </div>
  );
};

export default TrafficChart;
