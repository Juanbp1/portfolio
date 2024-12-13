import PropTypes from "prop-types";

const Buttons = ({ className, icon, label, onclick, size }) => {
  const sizeClasses =
    size === "small"
      ? "px-size-lg py-size-xs text-prf-xs"
      : "px-size-xl py-size-sm text-prf-sm";

  return (
    <button
      className={`btn ${sizeClasses} ${className}`}
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
  size: PropTypes.string,
};
export default Buttons;
