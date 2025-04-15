import PropTypes from "prop-types";
import { IoClose, IoMenu } from "react-icons/io5";

const ToggleMenuIcon = ({ isOpenMenu, closeScroll, openScroll }) => {
  return (
    <div>
      {isOpenMenu === true ? (
        <IoClose
          className="h-size-2xl w-size-2xl self-center dark:text-darkMode-primary-light"
          onClick={closeScroll}
        />
      ) : (
        <IoMenu
          className="h-size-2xl w-size-2xl self-center dark:text-darkMode-primary-light"
          onClick={openScroll}
        />
      )}
    </div>
  );
};
ToggleMenuIcon.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
  closeScroll: PropTypes.func.isRequired,
  openScroll: PropTypes.func.isRequired,
};
export default ToggleMenuIcon;
