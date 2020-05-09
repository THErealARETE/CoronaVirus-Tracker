// import React from "react";
// import Confirmed from "../resources/png_512/confirmed.png";

// const ConfirmedCases = () => {
//   return (
//     <div className="card">
//       <div className="cases-style">Confirmed Cases</div>
//       <div className="number-style">173,029</div>
//       <div className="confirmed-style">Confirmed</div>
//       <div className="card-image">
//         <img className="covid-image" src={Confirmed} alt="anxiety" />
//       </div>
//     </div>
//   );
// };

// export default ConfirmedCases;

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

import React from "react";
import { useEffect, useState } from "react";
import { fetchDailydata } from "../Components/coronaFigure";
import { Line, Bar } from "react-chartjs-2";
import CountryPicker from "../Components/countryPicker/CountryPicker";

import styles from "../Components/Charts/Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailydata());
      console.log(dailyData);
    };
    fetchApi();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["infected", "recovered", "deaths"],
        datasets: [
          {
            labels: "people",
            backgroundColor: [
              "rgba(0,0,255, 0.5)",
              "rgba(0,255,0, 0.5)",
              "rgba(255,0,0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.container}> {country ? barChart : lineChart} </div>
  );
};

export default Chart;
