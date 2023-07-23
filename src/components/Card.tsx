import React from "react";
import { Country } from "../interfaces/interfaces";

function Card(props: Country) {
  return <div>{props.name.common}</div>;
}

export default Card;
