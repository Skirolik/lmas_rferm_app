import React from "react";
import Chart from "react-apexcharts";
import { useComputedColorScheme } from "@mantine/core";

interface ResistanceData {
  Date: string;
  value: number;
}

const Grid_resistance_chart: React.FC<{ data: ResistanceData[] }> = ({
  data,
}) => {
  console.log("Data in chart", data);

  const computedColorScheme = useComputedColorScheme("light");

  const options = {
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      hideEmptySeries: true,
      fillSeriesColor: false,
      theme: computedColorScheme === "dark" ? "dark" : "light",
      style: {
        fontSize: "15px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: "dd MMM",
        formatter: undefined,
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: true,
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    legend: {
      show: true,
      labels: {
        colors: "yellow",
      },
    },
    markers: {
      size: 2,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle" as ApexMarkerShape | undefined,
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        autoSelected: "zoom" as "zoom" | "selection" | "pan" | undefined,
      },
    },
    dataLabels: {
      enabled: false,
    },

    yaxis: {
      labels: {
        style: {
          colors: computedColorScheme === "dark" ? "#fff" : "000",
        },
      },
      title: {
        text: "Resistance",
        style: {
          color: computedColorScheme === "dark" ? "#fff" : "000",
        },
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: data.map(({ Date, value }) => ({ x: Date, y: value })),
    },
  ];

  console.log("series", series);

  return (
    <div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default Grid_resistance_chart;
