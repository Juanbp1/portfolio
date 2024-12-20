import PropTypes from "prop-types";

const TextArea = ({ label, name, value, onChange }) => (
  <div className="textAreaContainer">
    <label className="text3 text-primary-light dark:text-light" htmlFor={name}>
      {label}
    </label>
    <textarea
      className="textarea resize-none dark:bg-gray-500 dark:text-gray-100"
      id={name}
      name={name}
      defaultValue={value}
      minLength="10"
      maxLength="100"
      onChange={onChange}
      required
    />
  </div>
);
TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["textarea"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TextArea;
