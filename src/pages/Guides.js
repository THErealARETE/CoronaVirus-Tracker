import React, { Component } from "react";
import Origin from "../Components/origin";
import HowItSpreads from "../Components/howItSpreads";
import Symptoms from "../Components/symptoms";
import PreventionAndTreatment from "../Components/preventionAndTreatment";
import Header from "../Components/header";
import Footer from "../Components/footer";

class Guides extends Component {
  render() {
    return (
      <div>
        <Header />
        <Origin />
        <Symptoms />
        <HowItSpreads />
        <PreventionAndTreatment />
        <Footer />
      </div>
    );
  }
}

export default Guides;
