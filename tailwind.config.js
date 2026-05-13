/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4f9',
          100: '#dae3f0',
          200: '#b8cae2',
          300: '#8aaacf',
          400: '#5c88ba',
          500: '#3a6aa3',
          600: '#2d5489',
          700: '#1e3a5f',
          800: '#162d4a',
          900: '#0f1f33',
          950: '#090f1a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
