import { Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import SingleCountry from "./components/single-country.js";
import NavBar from "./components/nav-bar.js";

import "./App.css";
import "../src/assets/styles/styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/name/:name" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
