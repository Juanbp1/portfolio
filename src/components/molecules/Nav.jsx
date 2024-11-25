import NavLink from "../atoms/NavLink";

const Nav = () => {
  return (
    <div className="flex items-center gap-size-2xl">
      <NavLink label="Lorem ipsum" to="/" />
      <NavLink label="Lorem ipsum" to="/" />
      <NavLink label="Lorem ipsum" to="/" />
      <NavLink label="Lorem ipsum" to="/" />
    </div>
  );
};

export default Nav;
