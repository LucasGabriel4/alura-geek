/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    colors: {
        blue: 'rgba(42, 122, 228, 1)',
        black: 'rgba(70, 70, 70, 1)',
        InputHeader: 'rgba(245, 245, 245, 1)',
        lightBlueHover: 'rgba(212, 228, 250, 1)',
        lightBlueHover2: 'rgba(85, 149, 233, 1)',
        white: '#fff',
        gray: 'rgba(70, 70, 70, 1)',
        lightBlue: 'rgba(234, 242, 253, 1)',
        lightgray: '#F5F5F5'
    },
    extend: {

    },
  },
  plugins: [],
}
