export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Env variables
  publicRuntimeConfig: {
    basisPublicApiKey: process.env.BASIS_PUBLIC_API_KEY,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "basis-vue",
    // script: [{ src: "http://127.0.0.1:5502/web-elements/dist/bundle/index.js" }],
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/basistheory.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["@basis-theory/web-elements"],
  },
};
