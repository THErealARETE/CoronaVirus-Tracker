import React from "react";
import Death from "../resources/png_512/death.png";
import Countup from "react-countup";

const DeathCases = ({ data: { deaths } }) => {
  if (!deaths) {
    return "loading...";
  }
  console.log(deaths);

  console.log(deaths.value);
  return (
    <div className="card">
      <div className="cases-style">Death Cases in Total</div>
      <div className="number-style">
        <Countup start={1} end={deaths.value} duration={2} separator="," />
      </div>
      {/* <div className="confirmed-style">Confirmed</div> */}
      <div className="card-image">
        <img className="covid-image" src={Death} alt="anxiety" />
      </div>
    </div>
  );
};

export default DeathCases;

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
