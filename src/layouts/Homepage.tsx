import React from "react";
import { useGetAllCountriesQuery } from "../services";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Homepage() {
  const { data, isLoading } = useGetAllCountriesQuery();
  console.log(data);

  // TODO:
  // skeleton for card component on isLoading
  // infinite scroll mode
  // create card component

  return (
    <>
      <Navbar />
      {data &&
        data.map((countryData, index) => <Card key={index} {...countryData} />)}
    </>
  );
}
