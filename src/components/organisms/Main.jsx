import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <main className="dark:bg-gray-600 bg-light" data-testid="main">{children}</main>;
};
Main.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Main; 
