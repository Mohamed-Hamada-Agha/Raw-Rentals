module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
  extend: {
  fontFamily: {
    sans: ['"JF Flat"', 'system-ui', 'sans-serif'],
    heading: ['"JF Flat"', 'system-ui', 'sans-serif'],
  },
}
  },
  plugins: [],
};
