/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        secondary: 'var(--secondary-blue)',
        secondary_text: 'var(--secondary-text)'
      }
    },
  },
  plugins: [],
};
