/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        ebonyClay: '#212435',
        emeraldLake: '#0BD88F',
        deepSkyBlue: '#00C2FF',
      },
      height: {
        '156': '58rem',
      },
    },
  },
  plugins: [],
}

