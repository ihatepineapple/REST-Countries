import { createBrowserRouter } from "react-router-dom";
import Homepage from "../layouts/Homepage";
import CountryDetails from "../layouts/CountryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:country",
    element: <CountryDetails />,
  },
]);
