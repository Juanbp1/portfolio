import PropTypes from "prop-types";

const TextArea = ({ label, name, value, onchange }) => (
  <div className="textAreaContainer">
    <label className="text3 dark:text-light" htmlFor={name}>
      {label}
    </label>
    <textarea
      className="textarea resize-none dark:bg-gray-500 dark:text-gray-100"
      id={name}
      name={name}
      defaultValue={value}
      minLength="10"
      maxLength="100"
      onChange={onchange}
      required
    />
  </div>
);
TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["textarea"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
export default TextArea;
