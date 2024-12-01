import Nav from "../molecules/Nav";
import Logo from "../../../public/assets/svg/logo.svg?react";
import DarkModeToogle from "../atoms/DarkModeToogle";

const Header = () => {
  return (
    <header data-testid="header" className="max-w-header mx-auto flex items-center justify-between">
      <Logo className="dark:!fill-darkMode-primary"/>
      <div className="flex w-[56%] justify-between">
        <Nav />
        <DarkModeToogle />
      </div>
    </header>
  );
};

export default Header;
