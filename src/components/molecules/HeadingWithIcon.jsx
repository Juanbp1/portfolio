import PropTypes from "prop-types";

const HeadingWithIcon = ({ titleColor, hrColor, Icon,iconColor }) => {
  return (
    <div className={'flex flex-col items-center'}>
      <Icon className={`${iconColor}`} />
      <div className="mt-size-md flex flex-col items-center">
        <h2 className={`${titleColor} heading2`}>Lorem ipsum</h2>
        <hr
          className={`${hrColor} mt-size-md w-36 rounded-full border-t-8`}
        ></hr>
      </div>
    </div>
  );
};
HeadingWithIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  titleColor: PropTypes.string,
  hrColor: PropTypes.string,
  iconColor: PropTypes.string,
};

export default HeadingWithIcon;
