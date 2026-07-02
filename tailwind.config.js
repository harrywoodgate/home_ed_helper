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
        slide_in: {
          '0%': {transform: 'translateX(-440px)'},
          '100%': {transform: 'translateX(0)'}
        },
        pop: {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.1)'},
          '100%': {transform: 'scale(1)'}
        }
      },
      animation: {
        slide_in: 'slide_in 2s ease-out forwards',
        pop: 'pop 1s 1s'
      }
    },
  },
  plugins: [],
};
