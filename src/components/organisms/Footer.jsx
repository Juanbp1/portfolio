import { useEffect, useState } from "react";
import FooterContent from "../molecules/FooterContent";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);
  const getCurrentYear = () => new Date().getFullYear();

  useEffect(() => {
    const year = getCurrentYear();
    setCurrentYear(year);
  }, []);

  return (
    <div className="flex flex-col items-center gap-size-2xl p-size-3xl">
      <FooterContent />
      <hr className="w-[70%] divide-solid border-bord-xs border-gray-300" />
      <p className="text3 w-[35%] text-center text-gray-400 dark:text-gray-200">
        Transformando ideas en interfaces – © {currentYear} Juan Manuel Barea
        Pantoja. Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
