import React, { Component } from "react";
import Header from "../Components/header";
import SuspectedCases from "../Components/suspectedCases";
import Chart from "../Components/comfirmedCases";
import DeathCases from "../Components/deathCases";
// import CoronaFigures from "../Components/coronaFigure";
// import Footer from "../Components/footer";
// //import axios from 'axios'
import { fetchData } from "../Components/coronaFigure";
import RecoveredCases from "../Components/recoveredCases";
import CountryPicker from "../Components/countryPicker/CountryPicker";

//const url = 'https://covid19.mathdro.id/api'

class Home extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country });

    // this.setState(country = )
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <Header />
        <div className="position">
          <SuspectedCases data={data} />
          <DeathCases data={data} />
        </div>
        <div className="position">
          <RecoveredCases data={data} />

          {/* <RecorveredCases />
        </div> */}
          {/* <CoronaFigures coronaFigures={this.state.coronaFigures} /> */}
          {/* <Footer /> */}
        </div>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Home;
