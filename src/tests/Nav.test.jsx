import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "../components/molecules/Nav"; // Ajusta la ruta si es necesario

// Mock del scrollIntoView
beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

const renderNav = () => {
  render(<Nav />);
  const aboutMeLink = screen.getByRole("link", { name: /sobre mí/i });
  const technologiesLink = screen.getByRole("link", { name: /tecnologías/i });
  const myProjectsLink = screen.getByRole("link", { name: /mis proyectos/i });
  const contactLink = screen.getByRole("link", { name: /contacto/i });

  return [aboutMeLink, technologiesLink, myProjectsLink, contactLink];
};

describe("El componente Nav funciona correctamente", () => {
  it("Se muestra correctamente con todos los enlaces", () => {
    const [aboutMeLink, technologiesLink, myProjectsLink, contactLink] =
      renderNav();
    expect(aboutMeLink).toBeInTheDocument();
    expect(technologiesLink).toBeInTheDocument();
    expect(myProjectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it("Los enlaces tienen atributos href correctos", () => {
    const [aboutMeLink, technologiesLink, myProjectsLink, contactLink] =
      renderNav();
    expect(aboutMeLink).toHaveAttribute("href", "#aboutMe");
    expect(technologiesLink).toHaveAttribute("href", "#technologies");
    expect(myProjectsLink).toHaveAttribute("href", "#myProjects");
    expect(contactLink).toHaveAttribute("href", "#contact");
  });
});
