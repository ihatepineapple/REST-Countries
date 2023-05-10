import React from "react";
import { useGetAllCountriesQuery } from "../services";

export default function Homepage() {
  const { data, isLoading } = useGetAllCountriesQuery();
  console.log(data);

  return <h1>Homepage</h1>;
}
