import ButtonsProject from "./ButtonsProject";
import PropTypes from "prop-types";

const Project = ({
  cardColor,
  caseStudyUrl,
  liveUrl,
  title,
  text,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className="max-w-cardProject">
      <div className={`${cardColor} cardProject dark:cardProject-dark mb-size-xl`}>
        <img src={imgSrc} alt={imgAlt} className="rounded-radius-xs" />
        <div className="overlay">
          <ButtonsProject caseStudyUrl={caseStudyUrl} liveUrl={liveUrl} />
        </div>
      </div>
      <h3 className="heading3 mb-size-xs dark:text-light">{title}</h3>
      <p className="text3 dark:text-gray-100">{text}</p>
    </div>
  );
};

Project.propTypes = {
  cardColor: PropTypes.string.isRequired,
  caseStudyUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default Project;
