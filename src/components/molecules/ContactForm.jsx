import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Buttons from "../atoms/Buttons";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import useFormStatus from "../../hooks/useFormStatus";

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { status, updateStatus, resetStatus } = useFormStatus();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setTimeout(() => {
      if (formRef.current) formRef.current.reset();

      setFormData({ name: "", email: "", message: "" });
      resetStatus();
    }, 3000);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    updateStatus(true, "Enviando...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      updateStatus(false, "¡Mensaje Enviado!");
      resetForm();

    } catch { 
      updateStatus(false, "¡Error al Enviar!");
      resetForm();
    }
  };

  return (
    <form
      ref={formRef}
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
