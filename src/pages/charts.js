import React from "react";
import { useEffect, useState } from "react";
import { fetchDailydata } from "../Components/coronaFigure";
import { Line, Bar } from "react-chartjs-2";

// import style from "./chart.module.css";

const Chart = () => {
  const { dailyData, setDailyData } = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailydata());
      console.log(dailyData);
    };
    fetchApi();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: "",
        datasets: [{}, {}],
      }}
    />
  ) : null;
  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
};

export default Chart;
