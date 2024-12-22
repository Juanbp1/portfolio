import FooterContent from "../molecules/FooterContent";

const Footer = () => {
  return (
    <div className="bg-red-000 flex flex-col items-center gap-size-2xl p-size-3xl">
      <FooterContent />
      <hr className="w-[70%] divide-solid border-bord-xs border-gray-300" />
      <p className="text3 w-[35%] text-center text-gray-400 dark:text-gray-200">
        Transformando ideas en interfaces – © 2024 Juan Manuel Barea Pantoja.
        Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
