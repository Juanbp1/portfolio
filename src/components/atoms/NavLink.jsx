import PropTypes from "prop-types";
import smoothScroll from "../../utils/smoothScroll";

const NavLink = ({ to, label }) => {
  return (
    <a
      className={`link:hover link:active link dark:active:text-darkMode-primary`}
      href={to}
      onClick={(e) => smoothScroll(e, to)}
    >
      {label}
    </a>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default NavLink;
