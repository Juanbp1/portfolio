import ComillaDoble from "../../../public/assets/svg/comilla-doble.svg?react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Link from "../atoms/Link";
import Logo from "../atoms/Logo";
const FooterContent = () => {
  const LINKS = [
    { icon: <TbBrandGithubFilled />, url: "" },
    { icon: <RiLinkedinFill />, url: "" },
    { icon: <MdEmail />, url: "" },
  ];
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
      <div className="flex gap-size-xl">
        {LINKS.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
