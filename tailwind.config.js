/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '88': '22rem',
        '7.5': '1.875rem',
      },
      backgroundImage: {
        'logo': "url('https://brandcolors.net/assets/img/logo.png')"
      },
      colors: {
        'link': '#0099e5',
        'main': '#263238',
        'border': '#e0e0e0',
        'brand': '#607d8b'
      }
    },
  },
  plugins: [],
}
