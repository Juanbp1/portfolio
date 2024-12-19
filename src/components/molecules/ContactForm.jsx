import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Buttons from "../atoms/Buttons";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import useFormStatus from "../../hooks/useFormStatus";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { status, updateStatus, resetStatus } = useFormStatus();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const resetForm = () => {
    setTimeout(() => {
      form.current.reset();
      setFormData({ name: "", email: "", message: "" });
      resetStatus();
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStatus(true, "Enviando...");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          updateStatus(false, "¡Mensaje Enviado!");
          resetForm();
        },
        () => {
          updateStatus(false, "¡Error al Enviar!");
          resetForm();
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="contactForm dark:bg-gray-600"
    >
      <Input
        label="Nombre"
        type="text"
        name="user_name"
        value={formData.name}
        onChange={handleChange}
        disabled={status.isLoading}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={status.isLoading}
      />
      <TextArea
        label="Mensaje"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        disabled={status.isLoading}
      />
      <Buttons
        label={status.statusMessage}
        type="submit"
        className="mt-size-xs flex justify-center bg-gray-600 dark:bg-light dark:text-gray-500"
        disabled={status.isLoading}
      />
    </form>
  );
};

export default ContactForm;
