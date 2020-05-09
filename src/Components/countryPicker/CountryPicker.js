import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "../countryPicker/countryPicker.module.css";
import { fetchCountryData } from "../coronaFigure";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountryData, setFetchedCountryData] = useState([]);

  useEffect(
    () => {
      const fetchCountries = async () => {
        setFetchedCountryData(await fetchCountryData());
      };
      fetchCountries();
    },
    [setFetchedCountryData]
  );
  console.log(fetchedCountryData);
  return (
    <div className={styles.formControl}>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="global"> Global </option>
          {fetchedCountryData.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
