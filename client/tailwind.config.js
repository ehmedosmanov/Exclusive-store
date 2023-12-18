/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#DB4444',
        secondary: '#F5F5F5',
        success: '#0F6'
      },
      colors: {
        primary: '#DB4444',
        secondary: '#F5F5F5',
        success: '#0F6'
      }
    }
  },
  plugins: []
}
