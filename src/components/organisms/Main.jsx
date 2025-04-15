import PropTypes from "prop-types";
const Main = ({ children, isOpenMenu }) => {
  return (
    <main
      className={`${isOpenMenu === true ? "before:backdrop-modal" : ""}  bg-light dark:bg-gray-600`}
      data-testid="main"
    >
      {children}
    </main>
  );
};
Main.propTypes = {
  children: PropTypes.node.isRequired,
  isOpenMenu: PropTypes.bool.isRequired
};
export default Main;
