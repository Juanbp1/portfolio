/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3D2CFC",
        secondary: "#a628ff",
        primaryDark: "#2f2971",
        "primary-light": "#F5F5FF",
        accent: "#FFCF28",
        "accent-light": "#fbe9aa",

        // Escala de grises
        light: "#FFFFFF",
        "gray-50": "#f6f6f6",
        "gray-100": "#e3e3e3",
        "gray-200": "#b1b2b5",
        "gray-300": "#7b7d85",
        "gray-400": "#64666a",
        "gray-500": "#303236",
        "gray-600": "#1f1f1f",
        dark: "#000000",

        // Otros
        warning: "#ffc107",
        success: "#28a745",
        error: "#dc3545",
        info: "#17a2b8",
        darkMode: {
          primary: "#6a62d3",
          "primary-light": "#d1d1e4",
          secondary: "#53157f",
          accent: "#e5af00",
          "accent-light": "#c7a969",
          warning: "#d49d07",
          success: "#1e7a37",
          error: "#a72835",
          info: "#11667c",
        },

        html: "#E34F26",
        css: "#1572B6",
        sass: "#CC6699",
        javascript: "#FFCF28",
        react: "#61DAFB",
        tailwind: "#38B2AC",
        jest: "#C21325",
        git: "#F05032",
        penpot: "#4040F2",
      },
      screens: {
        "2xl": "1800px", // Ultra-wide
        xl: "1450px", // Pantallas grandes
        lg: "1200px", // Laptop estándar
        md: "900px", // Tablet
        sm: "700px", // Móvil grande / tablet pequeña
        xs: "300px", // Móvil pequeño
      },
      fontSize: {
        "h1-lg": "4.375rem",
        "h2-md": "3.125rem",
        "h3-sm": "2rem",
        "prf-md": "1.5rem",
        "prf-sm": "1.25rem",
        "prf-xs": "1.125rem",
      },
      borderWidth: { "bord-xs": "1.5px" },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        "size-xs": "0.75rem",
        "size-sm": "1rem",
        "size-md": "1.5rem",
        "size-lg": "2rem",
        "size-xl": "3rem",
        "size-2xl": "4rem",
        "size-3xl": "6rem",
        "size-4xl": "8rem",
        "size-5xl": "12rem",
      },
      borderRadius: {
        "radius-xs": "0.25rem",
        "radius-md": "1.25rem",
        "radius-lg": "2.1875rem",
        "radius-xl": "3.125rem",
      },
      maxWidth: {
        container: "97.5rem",
        header: "108.4375rem",
        cardAbout: "87.5rem",
        tagGroup: "53.125rem",
        cardProject: "29.6875rem",
      },
      boxShadow: {
        darkTag: " 2px 2px 4px 0px #64666a",
        hover: "0 4px 6px rgba(0, 0, 0, 0.1)",
        tag: "0px 3px 5px 0px #e3e3e3",
        cardProject: "0px 3px 5px 0px #b1b2b5",
        cardProjectDark:
          "inset 4px 4px 8px #00000099, inset -4px -4px 8px #e3e3e31A",
      },
      keyframes: {
        slideInY: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideOutY: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        slideInX: {
          "0%": { transform: "translateX(100%)", opacity: "1" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        slideOutX: {
          "0%": { transform: "translateX(0%)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "1" },
        },
      },
      animation: {
        slideInY: "slideInY 0.5s ease-out forwards",
        slideOutY: "slideOutY 0.5s ease-out forwards",
        slideInX: "slideInX 0.5s ease-out forwards",
        slideOutX: "slideOutX 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".heading1": {
          fontSize: theme("fontSize.h1-lg"),
          color: theme("colors.gray-600"),
          lineHeight: "1",
          fontWeight: "700",
        },
        ".heading2": {
          fontSize: theme("fontSize.h2-md"),
          color: theme("colors.gray-600"),
          lineHeight: "1",
          fontWeight: "700",
        },
        ".heading3": {
          fontSize: theme("fontSize.h3-sm"),
          color: theme("colors.gray-600"),
          lineHeight: "1",
          fontWeight: "700",
        },
        ".text1": {
          fontSize: theme("fontSize.prf-md"),
          color: theme("colors.gray-500"),
          lineHeight: "1.4",
          fontWeight: "500",
        },
        ".text2": {
          fontSize: theme("fontSize.prf-sm"),
          color: theme("colors.gray-500"),
          lineHeight: "1.5",
          fontWeight: "600",
        },
        ".text3": {
          fontSize: theme("fontSize.prf-xs"),
          color: theme("colors.gray-500"),
          lineHeight: "1.5",
          fontWeight: "500",
        },
        ".link": {
          fontSize: theme("fontSize.prf-xs"),
          color: theme("colors.gray-400"),
          textDecoration: "none",
          transition: "all 0.4s ease-in-out",
          lineHeight: "1.5",
          fontWeight: "500",
        },
        ".link:hover": {
          transform: "scale(1.1)",
        },
        ".link:active": {
          color: theme("colors.primary"),
          textDecoration: "underline",
          textDecorationThickness: "3px",
          textUnderlineOffset: "0.75rem",
        },
        ".btn": {
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          borderRadius: theme("borderRadius.radius-xl"),
          fontSize: theme("fontSize.prf-sm"),
          fontWeight: "600",
          color: theme("colors.light"),
          transition: "all 0.3s ease-in-out",
        },
        ".btnContainer": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "80%",
        },
        ".btn:hover": {
          boxShadow: theme("boxShadow.hover"),
        },
        ".btn:active": {
          transform: "scale(0.8)",
        },
        ".techTag": {
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          borderRadius: theme("borderRadius.radius-xl"),
          background: theme("colors.primary-light"),
          padding: "0.5rem 1.8125rem",
          fontSize: theme("fontSize.prf-sm"),
          fontWeight: "500",
          boxShadow: theme("boxShadow.tag"),
        },
        ".cardProject": {
          borderRadius: theme("borderRadius.radius-lg"),
          boxShadow: theme("boxShadow.cardProject"),
          display: "flex",
          flexDirection: "column",
          maxHeight: "21.875rem",
          width: "100%",
          overflow: "hidden",
          padding: theme("spacing.size-lg"),
          position: "relative",
          top: "0",
          left: "0",
          zIndex:"0"
        },
        ".cardProject-dark": {
          boxShadow: theme("boxShadow.cardProjectDark"),
        },
        ".overlay": {
          position: "absolute",
          top: 0,
          left: 0,
          index: 5,
          width: "100%",
          height: "100%",
          backgroundColor: theme("colors.primaryDark"),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "all 0.4s ease-in-out",
        },
        ".overlay:hover": {
          opacity: 1,
        },
        ".contactForm": {
          padding: theme("spacing.size-xl"),
          borderRadius: theme("borderRadius.radius-md"),
          display: "flex",
          flexDirection: "column",
          gap: theme("spacing.size-md"),
          width: "100%",
        },
        ".inputContainer": {
          display: "flex",
          flexDirection: "column",
          gap: theme("spacing.size-xs"),
        },
        ".textAreaContainer": {
          display: "flex",
          flexDirection: "column",
          gap: theme("spacing.size-xs"),
        },
        ".input": {
          border: `1px solid ${theme("colors.gray-300")}`,
          backgroundColor: theme("colors-light"),
          borderRadius: theme("borderRadius.radius-lg"),
          height: theme("spacing.size-xl"),
          padding: `0 0 0 ${theme("spacing.size-md")}`,
        },
        ".textarea": {
          border: `1px solid ${theme("colors.gray-300")}`,
          backgroundColor: theme("colors-light"),
          borderRadius: theme("borderRadius.radius-md"),
          height: theme("spacing.size-5xl"),
          padding: `${theme("spacing.size-xs")} 0 0 ${theme("spacing.size-md")}`,
        },
        ".slider": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          borderRadius: "9999px",
          backgroundColor: theme("colors.accent"),
          padding: "4px",
          transition:
            "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
          height: "36px",
          width: "80px",
        },
        // Iconos
        ".slider-icon": {
          position: "absolute",
          zIndex: 10,
          width: theme("size.size-sm"),
          height: theme("size.size-sm"),
        },
        ".slider-icon-left": {
          left: theme("spacing[2.5]"), // 1.5 unidades de espaciado
        },
        ".slider-icon-right": {
          right: theme("spacing[2.5]"), // 1.5 unidades de espaciado
        },
        ".slider-circle": {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "28px",
          height: "28px",
          borderRadius: theme("borderRadius.full"),
          backgroundColor: theme("colors.light"),
          boxShadow: theme("boxShadow.md"),
          transition: "transform 300ms ease-in-out",
          transform: "translateX(0)", // Posición inicial
        },
        ".backdrop-modal":{
          position:"fixed",
          top:"0",
          left:"0",
          width:"100%",
          height:"100vh",
          backgroundColor:"rgba(0,0,0,0.5)",
          backdropFilter:"blur(5px)",
          zIndex:"10",
        },
        ".mobile-hidden": {
          "@media (max-width: 639px)": {
            // Aplicado solo para pantallas menores a 640px
            display: "none",
          },
        },
        ".tablet-hidden": {
          "@media (min-width: 640px) and (max-width: 1023px)": {
            // Aplicado solo entre 640px y 1023px
            display: "none",
          },
        },
        ".desktop-hidden": {
          "@media (min-width: 1024px)": {
            // Aplicado solo para pantallas mayores a 1024px
            display: "none",
          },
        },
        ".tablet-mobile-block": {
          "@media (max-width: 1023px)": {
            // Mostrar en tablets y móviles (menores a 1024px)
            display: "flex",
          },
        },
        ".desktop-mobile-block": {
          "@media (min-width: 640px) and (max-width: 1023px)": {
            // Mostrar solo en tablet y móvil
            display: "block",
          },
        },
      });
    },
  ],
};
