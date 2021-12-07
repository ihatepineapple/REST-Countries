import React from "react";
import { ReactComponent as SearchIcon } from '../assets/icons/search_black_24dp.svg';

const SearchBar = (props) => {
  const handleSearchInput = (event) => {
    let inputValue = event.target.value;
    props.handleFilterSearch(inputValue);
  };

  return (
    <div className="searchbar">
      <div className="searchbar__container">
      <span className="searchbar__icon">
        <SearchIcon fill="hsl(0, 0%, 52%)"/>
      </span>
      <input
        className="searchbar__input"
        name="search"
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearchInput}
        />
        </div>
    </div>
  );
};

export default SearchBar;
