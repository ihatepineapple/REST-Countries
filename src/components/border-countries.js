import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BorderCountries = (props) => {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((countries) => setCountriesList(countries.data))
      .catch((error) => console.log(`${error}`));
  }, []);

  const getCountryName = () => {
    const codes = props.data;

    if (countriesList.length === 0) return <></>;

    if (props.data === undefined) return <p>No borders to show</p>;

    const borderCountries = [];
    codes &&
      codes.map((code) => {
        const borderCountry = countriesList.filter((country) =>
          country.cca3.includes(code)
        );
        borderCountries.push(borderCountry);
        return borderCountries
      });

    if (props.data.length === borderCountries.length) {
      const borderName = borderCountries.map((border) => (
        <div className="button border">
          <Link to={`/name/${border[0].name.common}`} className="button__link">
            <p className="button__text">{border[0].name.common}</p>
          </Link>
        </div>
      ));
      return borderName;
    }
  };

  return (
    <div className="single__info_borders">
      <h4 className="single__info_borders_title">Border Countries:</h4>
      <div className="button__container">{getCountryName()}</div>
    </div>
  );
};

export default BorderCountries;
