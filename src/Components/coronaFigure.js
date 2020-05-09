// import React from "react";

// const CoronaFigures = ({ coronaFigures }) => {
//   return (
// //     <div>
// //       {/* <h1>contact liqt</h1> */}
// //       {coronaFigures.map(corona => (
// //         <div>
// //           <p>{corona.total_cases}</p>,<p>{corona.total_deaths}</p>,
// //           <p>{corona.total_recovered}</p>,<p>{corona.new_cases}</p>
// //         </div>
// //     )))}
// //     </div>
// //   );
// // };
// <div>
//     {coronaFigures.map((corona)=>(
//        <div>
//        //           <p>{corona.total_cases}</p>,<p>{corona.total_deaths}</p>,
//        //           <p>{corona.total_recovered}</p>,<p>{corona.new_cases}</p>
//                </div>
//     ))}
// </div>
// export default CoronaFigures;

// {contacts.map((contact) => (
//     <div>
//          <h5>{contact.name}</h5>
//         <h6 >{contact.email}</h6>
//         <p >{contact.company.catchPhrase}</p>
//     </div>

//   ))}

// import React from "react";

// const CoronaFigures = ({ coronaFigures }) => {
//   return (
//     <div>
//       {coronaFigures.map(corona => (
//         <div>
//           <p>{corona.total_cases}</p>,<p>{corona.total_deaths}</p>,
//           <p>{corona.total_recovered}</p>,<p>{corona.new_cases}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CoronaFigures;

import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const url2 = "https://covid19.mathdro.id/api/daily";
const url3 = "https://covid19.mathdro.id/api/countries";

export const fetchData = async (country) => {
  let changableURL = url;

  if (country) {
    changableURL = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changableURL);

    console.log(confirmed);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailydata = async () => {
  try {
    const { data } = await axios.get(url2);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCountryData = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(url3);

    // const response =  await axios.get(url3);
    // console.log(response);

    return countries.map((country) => country.name);
  } catch (error) {}
};
