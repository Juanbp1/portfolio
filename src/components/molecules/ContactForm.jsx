import { useState } from "react";
import Buttons from "../atoms/Buttons";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import PropTypes from "prop-types";

const ContactForm = ({ onsubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm dark:bg-gray-600">
      <Input
        label="Nombre"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextArea
        label="Mensaje"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <Buttons label="Enviar" className=" mt-size-xs flex justify-center bg-gray-600 dark:bg-light dark:text-gray-500" />
    </form>
  );
};
ContactForm.propTypes = {
  onsubmit: PropTypes.func.isRequired,
};
export default ContactForm;
