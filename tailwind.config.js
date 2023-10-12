/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: '#219C90',
        secondary: '#E9B824',
        dark: '#151515',
        light: '#FFFEC4',
        accent: '#EE9322',
        accent2: '#D83F31',
      },
      backgroundImage: {
        search: 'url("/src/assets/search.svg")',
      },
    },
  },
  plugins: [],
};
