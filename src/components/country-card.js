import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.data.flags.svg} alt={props.data.name.common} />
      </div>

      <div className="card__info">
        <Link to={`/name/${props.data.name.common}`} className="card__link">
          <h2>{props.data.name.common}</h2>
        </Link>

        <ul className="card__list">
          <li className="card__item">
            <span className="card__item_bold">Population: </span>
            {props.data.population}
          </li>
          <li className="card__item">
            <span className="card__item_bold">Region: </span>
            {props.data.continents[0]}
          </li>
          <li className="card__item">
            <span className="card__item_bold">Capital: </span>
            {props.data.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
