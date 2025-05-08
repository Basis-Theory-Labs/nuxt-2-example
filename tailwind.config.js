module.exports = {
  // New content property for Tailwind CSS v3.0
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // Remove purge if it exists (it's replaced by content in v3)
  theme: {
    extend: {},
  },
  plugins: [],
}