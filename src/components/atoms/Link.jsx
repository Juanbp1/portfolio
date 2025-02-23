import PropTypes from "prop-types";

const Link = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl text-light transition-colors dark:text-gray-600"
    >
      {link.icon}
    </a>
  );
};
Link.propTypes = {
  link: PropTypes.string.isRequired,
};
export default Link;
