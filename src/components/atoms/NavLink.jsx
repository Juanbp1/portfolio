import PropTypes from "prop-types";
import smoothScroll from "../../utils/smoothScroll";

const NavLink = ({ to, label, onClick }) => {
  
  const handleClick = (e, to) => {
    smoothScroll(e, to);
    if(onClick){
      onClick();
    }
  };
  return (
    <a
      className={`link:hover link:active link dark:text-light dark:active:text-darkMode-primary`}
      href={to}
      onClick={(e) => handleClick(e, to)}
    >
      {label}
    </a>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default NavLink;
