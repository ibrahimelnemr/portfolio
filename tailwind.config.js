/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#0a0f25',
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",  
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
