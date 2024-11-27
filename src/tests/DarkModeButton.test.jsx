import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import Header from "../components/organisms/Header";
import Main from "../components/organisms/Main";

describe("DarkModeToggle en un sistema con rutas", () => {
  beforeEach(() => {
    localStorage.clear(); // Limpia el localStorage antes de cada test
  });

  it('debería aplicar el modo claro si no existe configuración previa en localStorage', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  
    const checkbox = screen.getByLabelText("Activar o desactivar el modo oscuro");
  
    // Verificar que el localStorage no tiene valor inicial
    expect(localStorage.getItem("darkMode")).toBe(null);
  
    // Verificar que el modo claro está activo por defecto
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(checkbox).not.toBeChecked();
  }); 
  
  it('debería guardar "true" en localStorage al activar el modo oscuro', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const checkbox = screen.getByLabelText(
      "Activar o desactivar el modo oscuro",
    );

    // Simular clic para activar el modo oscuro
    fireEvent.click(checkbox);

    // Verificar que la preferencia se guardó en localStorage
    expect(localStorage.getItem("darkMode")).toBe("true");

    // Verificar que el document del dom contiene la clase dark
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it('debería guardar "false" en localStorage al desactivar el modo oscuro', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const checkbox = screen.getByLabelText(
      "Activar o desactivar el modo oscuro",
    );

    // Simula un clic para activar y luego desactivar el modo oscuro
    fireEvent.click(checkbox); // Activa el modo oscuro
    fireEvent.click(checkbox); // Desactiva el modo oscuro

    // Verifica que el valor guardado en localStorage es 'false'
    expect(localStorage.getItem("darkMode")).toBe("false");

    // Verificar que el document del dom no contiene la clase dark
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("debería cambiar los estilos del elemento main según el modo oscuro", () => {
    render(
      <MemoryRouter>
        <Main>
          <Header />
        </Main>
      </MemoryRouter>,
    );

    // Verificar los estilos iniciales (modo claro)
    const main = screen.getByRole("main");
    expect(main).toHaveStyle("background-color: rgba(0, 0, 0, 0)");

    const checkbox = screen.getByLabelText(
      "Activar o desactivar el modo oscuro",
    );

    // Activar el modo oscuro
    fireEvent.click(checkbox);
    expect(localStorage.getItem("darkMode")).toBe("true");

    // Verificar que los estilos cambian (modo oscuro)
    expect(main).toHaveClass("dark:bg-gray-600");
  });

  it("debería cambiar el color de fondo del elemento <main> al activar el modo oscuro", () => {
    render(
      <MemoryRouter>
        <Main>
          <Header />
        </Main>
      </MemoryRouter>,
    );
  
    const main = screen.getByRole("main");
    const checkbox = screen.getByLabelText("Activar o desactivar el modo oscuro");
  
    
    // Verificar estilos iniciales (modo claro)
    waitFor(()=>{
      expect(getComputedStyle(main).backgroundColor).toBe("rgb(255, 255, 255)"); // Blanco
    })
  
    // Activar modo oscuro
    fireEvent.click(checkbox);
    expect(localStorage.getItem("darkMode")).toBe("true");
  
    // Verificar estilos actualizados (modo oscuro)
    waitFor(()=>{ 
      expect(getComputedStyle(main).backgroundColor).toBe("rgba(75, 85, 99, 1)"); // Gris oscuro
    })
  });
   
  it("debería recordar la preferencia de modo oscuro tras recargar la página", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  
    const checkbox = screen.getByLabelText("Activar o desactivar el modo oscuro");
  
    // Activar modo oscuro
    fireEvent.click(checkbox);
    expect(localStorage.getItem("darkMode")).toBe("true");
  
    // Simular recarga (volver a renderizar)
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    // Verificar que el modo oscuro sigue activo
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(checkbox).toBeChecked();
  });
  
});
