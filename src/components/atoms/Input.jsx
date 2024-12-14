import PropTypes from "prop-types";

const Input = ({ label, type, name, value, onchange }) => (
  <div className="inputContainer">
    <label className="text3 dark:text-light" htmlFor={name}>
      {label}
    </label>
    <input
      className="input dark:bg-gray-500 dark:text-gray-100 "
      type={type}
      id={name}
      name={name}
      defaultValue={value}
      onChange={onchange}
      required
    />
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["email", "text"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};

export default Input;
