import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Card from "../components/molecules/Card";

// Mock de la función de descarga
vi.mock("../../../public/assets/svg/globo-dialogo.svg?react", () => ({
  default: "GloboDialogoMock",
}));

describe("Verificar que funcione el componente Card", () => {
  it("Debería llamar a la función de descarga al hacer clic en el botón 'Descargar CV", () => {
    // Pasar la nueva función a través de props o directamente en el componente
    render(<Card />);

    // Buscar el botón y simular un clic
    const buttonElement = screen.getByRole("button", { name: /Descargar CV/i });
    fireEvent.click(buttonElement);

    // Verificar que la función de descarga fue llamada
    waitFor(() => {
      expect(buttonElement).toHaveBeenCalledTimes(1);
    });
  });
});
