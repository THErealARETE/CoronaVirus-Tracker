import React from "react";
import Recovered from "../resources/png_512/recovered.png";
import Countup from "react-countup";

const RecoveredCases = ({ data: { recovered } }) => {
  if (!recovered) {
    return "loading...";
  }
  console.log(recovered);

  console.log(recovered.value);
  return (
    <div className="card">
      <div className="cases-style">Recovered Cases in Total</div>
      <div className="number-style">
        <Countup start={1} end={recovered.value} duration={2} separator="," />
      </div>
      {/* <div className="confirmed-style">Confirmed</div> */}
      <div className="card-image">
        <img className="covid-image" src={Recovered} alt="anxiety" />
      </div>
    </div>
  );
};

export default RecoveredCases;

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/pongsakornred" title="pongsakornRed">pongsakornRed</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
