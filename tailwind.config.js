/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.svelte",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'typewriter': ['BenjaminFranklin', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
