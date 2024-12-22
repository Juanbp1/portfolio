import PropTypes from "prop-types";

const Link = ({ link }) => {
  return (
    <div className="flex h-size-2xl w-size-2xl items-center justify-center rounded-full bg-primary dark:bg-gray-100">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-light transition-colors dark:text-gray-600"
      >
        {link.icon}
      </a>
    </div>
  );
};
Link.propTypes = {
  link: PropTypes.string.isRequired,
};
export default Link;
