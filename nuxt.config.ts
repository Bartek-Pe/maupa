export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/abstracts/_variables.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: 'MS Studio',
      meta: [
        { name: 'description', content: 'Projektowanie i zabudowa meblowa.' },
        { name: 'author', content: 'MS Studio - by Bartek Pierr' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' }
      ]
    },
  },
})