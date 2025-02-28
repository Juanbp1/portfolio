import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.js",
    coverage: {
      provider: "v8", // o 'istanbul'
      reportsDirectory: "./coverage",
      reporter: ["text", "html"], // Tipos de reportes: texto, HTML, JSON, etc.
      exclude: [
        "eslint.config.js",
        "postcss.config.js",
        "tailwind.config.js",
        "vite.config.js",
        "src/firebase/firebase.js",
        "build",
        "src/main.jsx",
      ],
    },
  },
  build: {
    outDir: "build",
    assetsDir: "assets/fonts",
  },
});
