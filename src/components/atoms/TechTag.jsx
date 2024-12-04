import PropTypes from "prop-types";

const TechTag = ({ name, icon, iconColor }) => {
const Icon = icon;
  return (
    <span className="techTag dark:bg-gray-500 dark:text-light dark:shadow-darkTag">
      <Icon className={`${iconColor} text-3xl`} />
      <p>{name}</p>
    </span>
  );
};

TechTag.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  iconColor: PropTypes.string,
};
export default TechTag;
