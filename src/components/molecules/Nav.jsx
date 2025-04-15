import PropTypes from "prop-types";
import NavLink from "../atoms/NavLink";

const Nav = ({ classNav, onNavClick }) => {
  return (
    <nav
      className={`${classNav} flex items-center gap-size-2xl`}
      data-testid="navMenu"
    >
      <NavLink onClick={onNavClick} label="Sobre mí" to="#aboutMe" />
      <NavLink onClick={onNavClick} label="Tecnologías" to="#technologies" />
      <NavLink onClick={onNavClick} label="Mis proyectos" to="#myProjects" />
      <NavLink onClick={onNavClick} label="Contacto" to="#contact" />
    </nav>
  );
};

Nav.propTypes = {
  classNav: PropTypes.string,
  onNavClick: PropTypes.func,
};
export default Nav;
