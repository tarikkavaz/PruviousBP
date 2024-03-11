// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["pruvious"],

  pruvious: {
    jwt: {
      secretKey: "vT201iNmUNEtoEr_VDmvAazSU-Qk-4id0uGI5xzK_6Jt7MBewLpHfTAQyjuMloYz"
    }
  }
})