/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        gray: {
          100: '#e1e1e6',
          300: '#c4c4cc',
          400: '#8d8d99',
          600: '#323238',
          700: '#29292e',
          800: '#202024',
          900: '#121214',
        },
        green: {
          300: '#00b37e',
          500: '#00875f'
        },
        red: {
          500: '#f75a68'
        }
      },
      gridTemplateColumns: {
        '2': '256px 1fr' 
      }
    },
  },
  plugins: [],
}

