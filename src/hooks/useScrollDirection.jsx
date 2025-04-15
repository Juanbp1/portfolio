import { useCallback, useEffect, useState } from "react";

const useScrollDirection = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null); // 'up' o 'down'
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Determina si el scroll supera el umbral para hacer el header sticky
    const heroSectionHeight =
      document.getElementById("heroSection").offsetHeight || 0;

    setIsSticky(currentScrollY > heroSectionHeight);

    if (currentScrollY === 0) {
      setScrollDirection(null); // No hay movimiento
    } else if (currentScrollY > lastScrollY) {
      setScrollDirection("down"); // Movimiento hacia abajo
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up"); // Movimiento hacia arriba
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  
  return { scrollDirection, setScrollDirection, isSticky };
};

export default useScrollDirection;
