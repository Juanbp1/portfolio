import NavLink from "../atoms/NavLink";

const Nav = () => {
  return (
    <nav className="flex items-center gap-size-2xl" data-testid="navMenu">
      <NavLink label="Sobre mí" to="#aboutMe" />
      <NavLink label="Tecnologías" to="#technologies" />
      <NavLink label="Mis proyectos" to="#myProjects" />
      <NavLink label="Contacto" to="#contact" />
    </nav>
  );
};

export default Nav;
