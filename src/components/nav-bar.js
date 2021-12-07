import React, { useState } from "react";
import { ReactComponent as DarkModeIcon } from "../assets/icons/dark_mode_black_24dp.svg";
import { ReactComponent as LightModeIcon } from "../assets/icons/light_mode_black_24dp.svg";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  function darkModeToggle() {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.getElementById("modeSwitch").innerHTML = "Light Mode";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.getElementById("modeSwitch").innerHTML = "Dark Mode";
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <h1 className="navbar__title">Where in the world?</h1>

        <div className="navbar__button" onClick={darkModeToggle}>
          {darkMode ? (
            <DarkModeIcon height="18px" fill="var(--text-color)" />
          ) : (
            <LightModeIcon height="20px" fill="var(--text-color)" />
          )}

          <h5 id="modeSwitch">Dark Mode</h5>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
