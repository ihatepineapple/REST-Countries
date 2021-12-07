import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

import SearchBar from "./search-bar.js";
import CountryCard from "./country-card.js";

const regions = [
  { label: "All regions", value: "all" },
  { label: "Europe", value: "Europe" },
  { label: "Asia", value: "Asia" },
  { label: "Africa", value: "Africa" },
  { label: "Americas", value: "Americas" },
  { label: "Oceania", value: "Oceania" },
];

const Home = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountriesList, setFilteredCountriesListState] = useState([]);
  const [filterState, setFilterState] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((countries) => setCountriesList(countries.data))
      .catch((error) => console.log(`${error}`));
  }, []);

  const handleFilterCountries = (props) => {
    const stateCopy = [...countriesList];

    if (props.constructor === Object) {
      const filteredCountriesList = stateCopy.filter((country) =>
        country.region.toLowerCase().includes(props.value.toLowerCase())
      );
      setFilteredCountriesListState(filteredCountriesList);
    } else {
      const filteredCountriesList = stateCopy.filter((country) =>
        country.name.common.toLowerCase().includes(props.toLowerCase())
      );
      setFilteredCountriesListState(filteredCountriesList);
    }
    setFilterState(true);
    console.log(filteredCountriesList);
  };

  const renderAllCountries = () => {
    return (
      countriesList &&
      countriesList.map((country, index) => (
        <div key={index} className="card__container">
          <CountryCard data={country} />
        </div>
      ))
    );
  };

  const renderFilteredCountries = () => {
    return (
      filteredCountriesList &&
      filteredCountriesList.map((country, index) => (
        <div key={index} className="card__container">
          <CountryCard data={country} />
        </div>
      ))
    );
  };

  return (
    <div>
      <div className="filters__containers">
        <SearchBar handleFilterSearch={handleFilterCountries} />

        <div className="dropdownMenu">
          <Select
            options={regions}
            onChange={handleFilterCountries}
            classNamePrefix="dropdownMenu"
            placeholder="Filter by Region"
          />
        </div>
      </div>

      <div className="wrapper">
        {filterState ? renderFilteredCountries() : renderAllCountries()}
      </div>
    </div>
  );
};

export default Home;
