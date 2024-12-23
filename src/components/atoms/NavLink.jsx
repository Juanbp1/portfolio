import PropTypes from "prop-types";

const NavLink = ({ to, label }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(to);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Desplaza al centro de la vista
      });
    }
  };
  return (
    <a className={`link link:hover link:active dark:active:text-darkMode-primary`} href={to} onClick={handleClick}>
      {label}
    </a>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default NavLink;
