import yoContact from "../../../public/assets/design/yo-contact.png";
import yoContactDark from "../../../public/assets/design/yo-contact-dark.png";
import Arrow from "../../../public/assets/svg/arrow2.svg?react";
import ContactForm from "../molecules/ContactForm";
import HeadingWithIcon from "../molecules/HeadingWithIcon";
import globoDialogo from "../../../public/assets/svg/globo-dialogo.svg?react";

const ContactSection = () => {
  return (
    <div className="bg-primary py-size-5xl dark:bg-primaryDark" id="contact">
      <div className="mx-auto flex max-w-container items-center justify-between">
        <div className="flex items-end">
          <img src={yoContact} className="dark:hidden"/>
          <img src={yoContactDark} hidden className="dark:block" />
          <Arrow className="h-fit w-[30%] dark:fill-accent" />
        </div>
        <div className="flex w-[40%] flex-col gap-size-2xl">
          <HeadingWithIcon
            titleColor="text-light dark:text-white"
            hrColor="bg-accent-light dark:bg-accent"
            Icon={globoDialogo}
            iconColor="dark:fill-light dark:stroke-light"
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
