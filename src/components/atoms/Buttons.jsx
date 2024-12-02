import PropTypes from "prop-types";

const Buttons = ({ className, icon, label, onclick }) => {
  return (
    <button
      className={`btn ${className} `}
      aria-label={label}
      onClick={onclick}
    >
      {icon && <span className="ml-3">{icon}</span>}
      {label}
    </button>
  );
};
Buttons.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};
export default Buttons;
