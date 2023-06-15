/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom': '89%',
        '50': '12.5rem'
      },
      width: {
        '88': '22rem'
      },
      top: {
        'custom': '2px'
      }
    },
  },
  plugins: [],
}