import { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const DarkModeToogle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", savedMode);
    return savedMode;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <label
      className="flex cursor-pointer items-center"
      data-testid="darkModeToggle"
    >
      {/* Texto que indica el estado */}
      <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
        {isDarkMode ? "Modo Oscuro" : "Modo Claro"}
      </span>

      {/* El input como base del toggle (oculto) */}
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="hidden"
        aria-label="Activar o desactivar el modo oscuro"
      />

      {/* El slider estilizado */}
      <div className="slider dark:bg-primary">
        <IoMoon className="slider-icon slider-icon-right text-white dark:text-black" />
        <IoSunny className="slider-icon slider-icon-left text-dark dark:text-white" />

        {/* El círculo que se desliza */}
        <div className="slider-circle dark:translate-x-[3.25rem]"></div>
      </div>
    </label>
  );
};

export default DarkModeToogle;
