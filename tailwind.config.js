/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(34, 34, 34)', // Example
        foreground: 'hsl(var(--foreground))',
        border: 'rgb(52, 152, 219)', // Example
      },
    },
  },
  plugins: [],
};
