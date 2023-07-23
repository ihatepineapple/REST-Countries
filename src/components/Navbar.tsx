import React, { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      setDarkMode(theme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    let newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="bg-white-color dark:bg-dark-blue text-very-dark-blue-light dark:text-white-color flex row items-center  w-100 justify-between py-12 px-24 h-12 shadow-bottom">
      <p className="font-bold text-lg">Where in the world?</p>
      <div
        className="flex row items-center cursor-pointer"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 mr-1" />
        ) : (
          <MoonIcon className="h-4 w-4 mr-1" />
        )}
        <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </header>
  );
}
export default Navbar;
