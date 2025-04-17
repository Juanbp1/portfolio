import Nav from "../molecules/Nav";
import Logo from "../atoms/Logo";
import DarkModeToggle from "../atoms/DarkModeToogle";
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
  const { scrollDirection, isSticky } =
  useScrollDirection();

  return (
    <header
      data-testid="header"
      className={`${
        isSticky ? "sticky top-0" : ""
      } mobile-hidden  tablet-hidden z-10 w-full bg-light transition-opacity duration-500 dark:bg-gray-600 ${
        scrollDirection === "up"
          ? "animate-slideInY"
          : scrollDirection === "down" && scrollDirection !== null
            ? "animate-slideOutY"
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
