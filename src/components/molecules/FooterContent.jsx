import PropTypes from "prop-types";
import ComillaDoble from "../../../public/assets/svg/comilla-doble.svg?react";
import Link from "../atoms/Link";
import Logo from "../atoms/Logo";
import SocialNetworks from "./SocialNetworks";
const FooterContent = () => {
  return (
    <div className="flex w-[30%] flex-col items-center gap-size-lg text-center">
      <Logo className="dark:!fill-light" />
      <div className="relative">
        <ComillaDoble className="absolute -left-size-lg -top-size-2xl" />
        <p className="text1 font-semibold dark:text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <ComillaDoble className="absolute -bottom-size-xl -right-size-xs rotate-180" />
      </div>
      <SocialNetworks bgColor="bg-primary" />
    </div>
  );
};
Link.propTypes = {
  link: PropTypes.object.isRequired,
};
export default FooterContent;
