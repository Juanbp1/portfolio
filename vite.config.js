import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.js',
    coverage: {
      provider: 'v8', // o 'istanbul'
      reportsDirectory: './coverage',
      reporter: ['text', 'html'], // Tipos de reportes: texto, HTML, JSON, etc.
      exclude: [
        'eslint.config.js','postcss.config.js','tailwind.config.js','vite.config.js','src/firebase/firebase.js',
      ],
    },
  },
});

