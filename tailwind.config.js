/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3D2CFC",
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
          dark: "#1f1f1f",
          "gray-50": "#1e1e1e",
          "gray-100": "#2c2c2c",
          "gray-200": "#404040",
          "gray-300": "#555555",
          "gray-400": "#6a6a6a",
          "gray-500": "#858585",
          "gray-600": "#b1b1b1",
          light: "#ffffff",
          warning: "#d49d07",
          success: "#1e7a37",
          error: "#a72835",
          info: "#11667c",
        },
      },

      fontSize: {
        "h1-lg": "70px",
        "h2-md": "50px",
        "h3-sm": "32px",
        "prf-md": "24px",
        "prf-sm": "20px",
        "prf-xs": "18px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        "size-xs": "12px",
        "size-sm": "16px",
        "size-md": "24px",
        "size-lg": "32px",
        "size-xl": "48px",
        "size-2xl": "64px",
        "size-3xl": "96px",
        "size-4xl": "128px",
        "size-5xl": "192px",
      },
      borderRadius: {
        "radius-md": "20px",
        "radius-xl": "50px",
      },
      maxWidth: {
        container: "1560px",
        header: "1735px",
        cardAbout: "1400px",
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
          textUnderlineOffset: "12px",
        },
        ".btn": {
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          borderRadius: theme("borderRadius.radius-xl"),
          padding: `${theme("spacing.size-sm")} ${theme("spacing.size-xl")}`,
          fontSize: theme("fontSize.prf-sm"),
          fontWeight: "600",
          color: theme("colors.light"),
          transition: "all 0.3s ease-in-out",
        },
        ".btn:hover": {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        ".btn:active":{
          transform:'scale(0.8)'
        },
      });
    },
  ],
};
