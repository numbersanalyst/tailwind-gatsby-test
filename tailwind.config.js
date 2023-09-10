/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      width: {
        phone: '375px',
      },
      height: {
        phone: '777px',
      },
      borderRadius: {
        'xl':  '30px',
      },
      colors: {
        yellow: {
          300: '#FFE201',
        }
      }
    },
  },
  plugins: [],
}
