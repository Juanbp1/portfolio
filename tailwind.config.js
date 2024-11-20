/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D2CFC',
        'primary-light': '#F5F5FF',
        secondary: '#FFCF28',

        // Escala de grises
        light: '#FFFFFF',
        'gray-50': '#f6f6f6',
        'gray-100': '#e3e3e3',
        'gray-200': '#b1b2b5',
        'gray-300': '#7b7d85',
        'gray-400': '#64666a',
        'gray-500': '#303236',
        'gray-600': '#1f1f1f',
        dark: '#000000',

        // Otros
        warning: '#ffc107',
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8',
      },
      fontSize: {
        'h1-lg': '70px',
        'h2-md': '50px',
        'h3-sm': '32px',
        'prf-md': '24px',
        'prf-sm': '20px',
        'prf-xs': '18px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'size-xs': '12px',
        'size-sm': '16px',
        'size-md': '24px',
        'size-lg': '32px',
        'size-xl': '48px',
        'size-2xl': '64px',
        'size-3xl': '96px',
        'size-4xl': '128px',
        'size-5xl': '192px',
      },
      borderRadius: {
        'radius-md': '20px',
        'radius-xl': '50px',
      },
      maxWidth: {
        container: '1560px',
      },
    },
  },
  plugins: [
 
  ],
};

