import { describe, it, expect, vi, beforeAll, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavLink from "../components/atoms/NavLink";

// Mock de scrollIntoView
beforeAll(() => {
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = vi.fn(); // Añade scrollIntoView si no existe
  }
  vi.spyOn(Element.prototype, "scrollIntoView").mockImplementation(() => {});
});
afterEach(() => {
  vi.restoreAllMocks(); // Restaura todos los mocks después de cada prueba
});

const renderNavLink = () => {
  const links = [
    { to: "#aboutMe", label: "Sobre mí" },
    { to: "#technologies", label: "Tecnologías" },
    { to: "#myProjects", label: "Mis proyectos" },
    { to: "#contact", label: "Contacto" },
  ];
  links.map((link) => {
    render(<NavLink to={link.to} label={link.label} />);
    // render(<Nav/>)
    const linkElement =  screen.getByRole("link", { name: `${link.label}` });
    expect(linkElement).toHaveAttribute("href", `${link.to}`);
  });
};
describe("El componente NavLink funciona correctamente", () => {
  it("El link deberia tener los atributos adecuados", () => {
    renderNavLink();
  });
  it("Llama a scrollIntoView cuando el elemento de destino existe", async () => {
    const user = userEvent.setup();

    // Agrega el elemento de destino al DOM
    const targetElement = document.createElement("div");
    targetElement.id = "test";
    document.body.appendChild(targetElement);

    render(<NavLink to="#test" label="Test Label" />);
    const linkElement = screen.getByRole("link", { name: /test label/i });

    await user.click(linkElement);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "center",
    });
  });

  it("No hace nada si el elemento de destino no existe", async () => {
    const user = userEvent.setup();

    render(<NavLink to="#nonExistent" label="Non Existent" />);
    const linkElement = screen.queryByRole("link", { name: /non existent/i });

    await user.click(linkElement);

    // Verifica que no se haya llamado a scrollIntoView
    expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
  });
});
