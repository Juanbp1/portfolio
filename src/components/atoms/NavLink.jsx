import PropTypes from "prop-types";

const NavLink = ({ to, label }) => {
  return (
    <a className={`link link:hover link:active`} href={to}>
      {label}
    </a>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default NavLink;