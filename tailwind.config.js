/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0f172a',
          darker: '#020617',
          neon: '#22d3ee',
          primary: '#3b82f6',
          success: '#22c55e',
          warning: '#eab308',
          danger: '#ef4444'
        }
      }
    },
  },
  plugins: [],
}
