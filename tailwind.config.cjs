/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroyBd': ['Gilroy Bold'],
        'gilroyLt': ['Gilroy Light'],
        'naveidLt': ['Naveid Light'],
        'naveidEl': ['Naveid Extra Light'],
        'naveidMd': ['Naveid Medium'],
        'naveidRg': ['Naveid Regular'],
        'naveidBd': ['Naveid Bold'],
        'naveidExbd': ['Naveid Extra Bold'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}