import { IoMdEye } from "react-icons/io";
import Buttons from "../atoms/Buttons";
import { GoArrowUpRight } from "react-icons/go";
import PropTypes from "prop-types";

const ButtonsProject = ({ liveUrl, caseStudyUrl }) => {
  const handleRedirect = (url) => {
    if (url) {
      window.open(url, "_blank"); // Abre la URL en una nueva pestaña
    } else {
      console.error("URL no válida");
    }
  };
  return (
    <div className="btnContainer">
      <Buttons
        className="bg-white text-gray-600 hover:bg-gray-100"
        label="Ver en vivo"
        icon={<IoMdEye className="size-size-md text-gray-600" />}
        size="small"
        onclick={() => handleRedirect(liveUrl)}
      />
      <Buttons
        className="bg-gray-600 text-white hover:bg-gray-500"
        label="Caso de estudio"
        icon={<GoArrowUpRight className="size-size-md text-white" />}
        size="small"
        onclick={() => handleRedirect(caseStudyUrl)}
      />
    </div>
  );
};

ButtonsProject.propTypes = {
  liveUrl: PropTypes.string.isRequired,
  caseStudyUrl: PropTypes.string.isRequired,
};
export default ButtonsProject;
