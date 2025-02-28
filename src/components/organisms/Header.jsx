import { useCallback, useEffect, useState } from "react";
import Nav from "../molecules/Nav";
import Logo from "../atoms/Logo";
import DarkModeToggle from "../atoms/DarkModeToogle";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null); // 'up' o 'down'
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Determina si el scroll supera el umbral para hacer el header sticky
    const heroSectionHeight =
      document.getElementById("heroSection").offsetHeight || 0;

    setIsSticky(currentScrollY > heroSectionHeight);

    if (currentScrollY === 0) {
      setScrollDirection(null); // No hay movimiento
    } else if (currentScrollY > lastScrollY) {
      setScrollDirection("down"); // Movimiento hacia abajo
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up"); // Movimiento hacia arriba
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      data-testid="header"
      className={`${
        isSticky ? "sticky top-0" : ""
      } z-10 w-full bg-light transition-opacity duration-500 dark:bg-gray-600 ${
        scrollDirection === "up"
          ? "animate-slideIn"
          : scrollDirection === "down" && scrollDirection !== null
            ? "animate-slideOut"
            : ""
      }`}
      id="header"
    >
      <div className="mx-auto flex w-full max-w-header items-center justify-between">
        <Logo className="dark:!fill-darkMode-primary" />
        <div className="flex w-[56%] justify-between">
          <Nav />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
