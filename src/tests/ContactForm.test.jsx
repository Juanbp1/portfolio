import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../components/molecules/ContactForm";
import emailjs from "@emailjs/browser";
import { beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("../../hooks/useFormStatus", () => {
  return vi.fn(() => ({
    status: { isLoading: false, statusMessage: "Enviar" },
    updateStatus: vi.fn(),
    resetStatus: vi.fn(),
  }));
});

describe("Verificar que funciona el componente ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Muestra el formulario de contacto con todos los campos y botones.", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });
  test("Actualiza los campos del formulario según la entrada del usuario.", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);

    fireEvent.change(nameInput, { target: { value: "Juan" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hola, este es un mensaje." },
    });

    expect(nameInput.value).toBe("Juan");
    expect(emailInput.value).toBe("juan@example.com");
    expect(messageInput.value).toBe("Hola, este es un mensaje.");
  });
  test("Envía el formulario y llama a emailjs.sendForm", async () => {
    const sendFormMock = vi.fn().mockResolvedValueOnce({});
    vi.spyOn(emailjs, "sendForm").mockImplementation(sendFormMock);

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByText(/Enviar/i);

    fireEvent.change(nameInput, { target: { value: "Juan" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hola, este es un mensaje." },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
      expect(emailjs.sendForm).toHaveBeenCalledWith(
        expect.any(String), // service ID
        expect.any(String), // template ID
        expect.any(HTMLFormElement), // form reference
        expect.any(String), // public key
      );
    });
  });
  test("Muestra un mensaje de error cuando falla emailjs.sendForm", async () => {
    const sendFormMock = vi
      .fn()
      .mockRejectedValueOnce(new Error("Error sending email"));
    vi.spyOn(emailjs, "sendForm").mockImplementation(sendFormMock);

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByText(/Enviar/i);

    fireEvent.change(nameInput, { target: { value: "Juan" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hola, este es un mensaje." },
    });
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText(/¡Error al Enviar!/i)).toBeInTheDocument(),
    );
  });
  test("Restablece los campos del formulario después del envío", async () => {
    const sendFormMock = vi.fn().mockResolvedValueOnce({});
    vi.spyOn(emailjs, "sendForm").mockImplementation(sendFormMock);
    
    render(<ContactForm />);

    // Obtén los elementos del formulario
    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Mensaje/i);
    const submitButton = screen.getByText(/Enviar/i);

    // Simula la entrada del usuario
    fireEvent.change(nameInput, { target: { value: "Juan" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hola, este es un mensaje." },
    });

    // Verifica que los campos se hayan actualizado
    expect(nameInput.value).toBe("Juan");
    expect(emailInput.value).toBe("juan@example.com");
    expect(messageInput.value).toBe("Hola, este es un mensaje.");

    // Simula la presentación del formulario
    fireEvent.click(submitButton);

    // Espera a que el formulario se restablezca
    await waitFor(
      () => {
        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
        expect(messageInput.value).toBe("");
      },
      { timeout: 4000 },
    );
  });
});
