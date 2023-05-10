import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Country = {
  name: string;
  region: string;
  capital: string;
  population: number;
};

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (build) => ({
    getAllCountries: build.query<Country, string>({
      query: () => {
        return `all`;
      },
    }),
    getCountryByName: build.query<Country, string>({
      query: (name) => {
        return `name/${name}`;
      },
    }),
    getCountryByCode: build.query<Country, string>({
      query: (code) => {
        return `alpha/${code}`;
      },
    }),
    getCountriesByRegion: build.query<Country, string>({
      query: (region) => {
        return `region/${region}`;
      },
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByCodeQuery,
  useGetCountriesByRegionQuery,
} = countriesApi;
