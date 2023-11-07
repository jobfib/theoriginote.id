// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  generate: {
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },
  ssr: false, //When false
  target: 'static', // and static, nuxt generates a SPA
});

