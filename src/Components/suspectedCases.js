import React from "react";
import Anxiety from "../resources/anxiety.png";
import Countup from "react-countup";

const SuspectedCases = ({ data: { confirmed } }) => {
  if (!confirmed) {
    return "loading...";
  }
  console.log(confirmed);

  console.log(confirmed.value);

  // console.log(confirmed);{ data: { confirmed } }

  //console.log("confirmed value", confirmed.value);confirmed.value}

  return (
    <div className="card">
      <div className="cases-style"> Confirmed Cases in Total</div>
      <div className="number-style">
        <Countup start={1} end={confirmed.value} duration={2} separator="," />
      </div>
      {/* <div className="confirmed-style"></div> */}
      <div className="card-image">
        <img className="covid-image" src={Anxiety} alt="anxiety" />
      </div>
    </div>
  );
};

export default SuspectedCases;

//<div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
