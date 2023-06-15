/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '50': '12.5rem',
        'medium': '125%',
        'large': '150%'
      },
      minHeight: {
        'custom': '90.5vh'
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