import Logo from "../atoms/Logo";
import PropTypes from "prop-types";
import Nav from "../molecules/Nav";
import DarkModeToggle from "../atoms/DarkModeToogle";
import { useEffect } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import ToggleMenuIcon from "../atoms/ToggleMenuIcon";
const HeaderMobile = ({ setIsOpenMenu, isOpenMenu }) => {
  const { scrollDirection, isSticky } = useScrollDirection();

  const openScroll = () => {
    setIsOpenMenu(true);
  };

  const closeScroll = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    if (isOpenMenu === true) {
      document.body.style.overflow = "hidden"; // Bloquea el scroll
    } else {
      document.body.style.overflow = "visible"; // Restaura el scroll
    }
  }, [isOpenMenu]);

  return (
    <div
      className={`${
        isOpenMenu === true ? "fixed top-0 z-10 w-full" : "sticky top-0 z-10"
      } desktop-hidden tablet-mobile-block`}
    >
      <header
        className={`${
          isSticky ? "sticky top-0" : "relative"
        } z-20 flex w-full justify-between bg-light dark:bg-gray-600 ${
          scrollDirection === "up"
            ? "animate-slideInY"
            : scrollDirection === "down" && scrollDirection !== null
              ? "animate-slideOutY"
              : ""
        } `}
      >
        <Logo className="dark:!fill-darkMode-primary" />
        <ToggleMenuIcon isOpenMenu={isOpenMenu} openScroll={openScroll} closeScroll={closeScroll}/>
      </header>
      <div
        className={`absolute right-0 top-0 flex h-screen w-[56%] translate-x-full flex-col items-center justify-center bg-light dark:bg-gray-600 xs:w-11/12 ${
          isOpenMenu === true ? "animate-slideInX" : "animate-slideOutX"
        } }`}
      >
        <div className="flex h-4/5 flex-col items-center justify-evenly">
          <Nav classNav="flex-col" onNavClick={closeScroll} />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};
HeaderMobile.propTypes = {
  setIsOpenMenu: PropTypes.func.isRequired,
  isOpenMenu: PropTypes.bool.isRequired,
};
export default HeaderMobile;
