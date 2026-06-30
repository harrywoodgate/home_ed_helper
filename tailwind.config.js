/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        secondary: 'var(--secondary-blue)',
        secondary_text: 'var(--secondary-text)',
        darker_background: 'var(--darker-background)'
      },
      keyframes: {
        scaleX: {
          '0%': {transform: 'scaleX(0)'},
          '100%': {transform: 'scaleX(1)'}
        }
      },
      animation: {
        scaleX: 'scaleX 1s linear normal forwards'
      }
    },
  },
  plugins: [],
};
