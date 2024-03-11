// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'pruvious'],
  googleFonts: {
    families: {
      Lato: {
        wght: [400, 700],
        ital: [400, 700],
      },
      Poppins: [500],
    },
  },
  pruvious: {
    jwt: {
      secretKey: "vT201iNmUNEtoEr_VDmvAazSU-Qk-4id0uGI5xzK_6Jt7MBewLpHfTAQyjuMloYz"
    }
  }
})