/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#3D2CFC",
        primaryDark: "#0e038c",
        "primary-light": "#F5F5FF",
        secondary: "#FFCF28",
        "secondary-light":"#fbe9aa",

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
          fontWeight: "600",
        },
        ".link:active": {
          fontWeight: "700",
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
        ".btn:focus": {
          outline: "none",
          ringWidth: "2px",
          ringColor: theme("colors.gray-300"),
          ringOffsetWidth: "2px",
        },
      });
    },
  ],
};
