import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Header from "../components/organisms/Header";
import HeroSection from "../components/organisms/HeroSection";
import Main from "../components/organisms/Main";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
  // Restablece el scroll antes de cada prueba
  window.scrollTo(0, 0);
});

describe("Header", () => {

  it("se renderiza el header", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(getByTestId("header")).toBeInTheDocument();
  });

  it("muestra Nav, Logo, y DarkModeToggle", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("navMenu")).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("darkModeToggle")).toBeInTheDocument();
  });

  it("establece scrollDirection en null cuando currentScrollY es 0", async () => {
    render(
      <MemoryRouter>
        <Main>
          <Header />
          <HeroSection />
        </Main>
      </MemoryRouter>
    );
    window.scrollTo(0, 0); // Simula el scroll en 0
    fireEvent.scroll(window);
    await waitFor(() => {
      expect(screen.getByTestId("header")).not.toHaveClass("animate-slideInY");
      expect(screen.getByTestId("header")).not.toHaveClass("animate-slideOutY");
    });
  });

  it("establece scrollDirection como 'down' cuando el scroll baja", () => {
    render(
      <MemoryRouter>
        <Main>
          <Header />
          <HeroSection />
        </Main>
      </MemoryRouter>
    );
    window.scrollTo(0, 0); // Scroll inicial
    fireEvent.scroll(window, { target: { scrollY: 1500 } }); // Simula scroll hacia abajo
     waitFor(() => {
      expect(screen.getByTestId("header")).toHaveClass("animate-slideOutY");
    });
  });

  it("establece scrollDirection como 'up' cuando el scroll sube", () => {
    render(
      <MemoryRouter>
        <Main>
          <Header />
          <HeroSection />
        </Main>
      </MemoryRouter>
    );
    window.scrollTo(0, 1500); // Scroll inicial
    fireEvent.scroll(window, { target: { scrollY: 1000 } }); // Simula scroll hacia arriba
     waitFor(() => {
      expect(screen.getByTestId("header")).toHaveClass("animate-slideInY");
    });
  });

  it("cambia las clases de acuerdo a scrollDirection", async () => {
    render(
      <MemoryRouter>
        <Main>
          <Header />
          <HeroSection />
        </Main>
      </MemoryRouter>
    );

    fireEvent.scroll(window, { target: { scrollY: 1500 } }); // Scroll hacia abajo
    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveClass("animate-slideOutY");
    });

    fireEvent.scroll(window, { target: { scrollY: 1000 } }); // Scroll hacia arriba
    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveClass("animate-slideInY");
    });
  });

  it("se vuelve sticky después de hacer scroll", async () => {
    render(
      <MemoryRouter>
        <Main>
          <Header />
          <HeroSection />
        </Main>
      </MemoryRouter>
    );

    // Simula el scroll en 0, el header no debe ser sticky
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    await waitFor(() => {
      expect(screen.getByTestId("header")).not.toHaveClass("sticky");
    });

    // Simula el scroll hacia abajo
    fireEvent.scroll(window, { target: { scrollY: 1500 } });
    await waitFor(() => {
      expect(screen.getByTestId("header")).toHaveClass("sticky");
    });

    // Simula el scroll hacia arriba
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    await waitFor(() => {
      expect(screen.getByTestId("header")).not.toHaveClass("sticky");
    });
  });
});
