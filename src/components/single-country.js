import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow_back_black_24dp.svg";

import BorderCountries from "./border-countries";

const SingleCountry = () => {
  let params = useParams();
  const [singleCountry, setSingleCountry] = useState([]);

  useEffect(() => {
    const getSingleCountry = () => {
      axios
        .get(`https://restcountries.com/v3.1/name/${params.name}`)
        .then((country) => setSingleCountry(country.data))
        .catch((error) => console.log(`${error}`));
    };
    getSingleCountry();
  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

  const getNativeName = () => {
    const nativeName = singleCountry.map((country) =>
      Object.values(country.name.nativeName)
    )[0][0].official;
    return nativeName;
  };

  const getCurrencies = () => {
    const currency = singleCountry.map(
      (country) =>
        Object.values(country.currencies).map((currencyName) => currencyName)[0]
          .name
    );
    return currency;
  };

  const getLanguages = () => {
    const language = singleCountry.map((country) =>
      Object.values(country.languages).map((language) => (
        <span key={language}>{language}. </span>
      ))
    );
    return language;
  };

  return (
    <div className="wrapper single__wrapper">
      <div className="button back">
        <Link to="/" className="button__link">
          <span className="button__icon">
            <ArrowIcon fill="var(--text-color)" />
          </span>
          <p className="button__text"> Back</p>
        </Link>
      </div>

      {singleCountry.map((country, index) => (
        <div key={index} className="single">
          <div className="single__image_container">
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="single__image"
            />
          </div>

          <div className="single__info">
            <h2 className="single__info_title">{country.name.common}</h2>
            <div className="single__info_block">
              <p>
                <b>Native Name: </b>
                {getNativeName()}
              </p>
              <p>
                <b>Population: </b>
                {country.population}
              </p>
              <p>
                <b>Region: </b>
                {country.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {country.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {country.capital}
              </p>
            </div>
            <div className="single__info_block">
              <p>
                <b>Top Level Domain: </b>
                {country.tld[0]}
              </p>
              <p>
                <b>Currencies: </b>
                {getCurrencies()}
              </p>
              <p>
                <b>Languages: </b>
                {getLanguages()}
              </p>
            </div>

            <BorderCountries data={country.borders} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCountry;
