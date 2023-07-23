export interface Country {
  name: { common: string };
  region: string;
  subregion: string;
  flags: {
    png: string;
    svg: string;
  };
  continents: string[];
  captial: string[];
  population: number;
  cca2: string;
}
