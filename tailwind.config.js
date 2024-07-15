/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./main-bg.png')",
        'hero-dark-pattern': "url('./dark-bg.jpg')",
      },
      boxShadow: {
        'custom': '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'custom-bg-light': "#ffffff",
        'custom-bg-dark': "#212121",
        'custom-primary': "#3591ec",
        'custom-dark-primary': "#8774e1",
        'custom-primary-text': "#3a3a3a",
        'custom-dark-primary-text': "#fdfdfd",
      }
    },

  },
  plugins: [],
}

