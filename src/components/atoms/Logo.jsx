import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LogoSVG from "../../../public/assets/svg/logo.svg?react";

const Logo = ({ className, testid = "logo" }) => {
  return (
    <Link to="/" aria-label="Ir al inicio" data-testid={testid}>
      <LogoSVG className={className} />
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  testid: PropTypes.string,
};

export default Logo;
