import PropTypes from "prop-types";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from "../atoms/Link";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const SocialNetworks = ({ bgColor, gap = "gap-size-xl" }) => {
  const LINKS = [
    { icon: <TbBrandGithubFilled />, url: "" },
    { icon: <RiLinkedinFill />, url: "" },
    { icon: <MdEmail />, url: "" },
  ];
  return (
    <div className={`flex ${gap}`}>
      {LINKS.map((link, index) => (
        <div
          key={index}
          className={`flex h-size-2xl w-size-2xl items-center justify-center rounded-full dark:bg-gray-100 ${bgColor}`}
        >
          <Link link={link} />
        </div>
      ))}
    </div>
  );
};
SocialNetworks.propTypes = {
  bgColor: PropTypes.string.isRequired,
  gap: PropTypes.string,
};
export default SocialNetworks;
