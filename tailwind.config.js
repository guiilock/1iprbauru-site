/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#31435b',
          dark: '#1f2937',
        },
        secondary: {
          DEFAULT: '#5a85a8',
          light: '#7ba3c4',
        },
        accent: {
          DEFAULT: '#e8994c',
          light: '#f4b371',
          lighter: '#fdca93',
        },
        cream: '#ffecce',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
