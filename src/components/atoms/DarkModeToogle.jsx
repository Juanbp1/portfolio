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
    <label className="flex cursor-pointer items-center">
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
      <div className="relative">
        <div className="flex h-9 w-20 items-center rounded-full bg-secondary p-1 transition-colors duration-300 dark:bg-primary">
          <IoMoon className="absolute right-1.5 z-10 size-size-md text-white dark:text-black" />
          <IoSunny className="absolute left-1.5 z-10 size-size-md text-dark dark:text-white" />

          {/* El círculo que se desliza */}
          <div className="absolute flex h-7 w-7 translate-x-0 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out dark:translate-x-11"></div>
        </div>
      </div>
    </label>
  );
};

export default DarkModeToogle;
