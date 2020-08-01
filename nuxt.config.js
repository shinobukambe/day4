    const base_url = 'https://kambe.kikagaku.net/day4/'
    // const base_url = 'http://localhost:3000/'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  // target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '株式会社キカガク | 公式ホームページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: `${base_url}css/style.css?388383` },
      { rel: 'stylesheet', type: 'text/css', href: `${base_url}css/lib/swiper.css?388383` }     
    ],
    script: [
      { src: `${base_url}js/lib/jquery-3.4.1.js?388383` },
      { src: `${base_url}js/lib/countTo.js?388383` },
      { src: `${base_url}js/lib/inview.js?388383` },
      { src: `${base_url}js/lib/ofi.js?388383` },
      { src: `${base_url}js/lib/pf.intrinsic.js?388383` },
      { src: `${base_url}js/lib/picturefill.js?388383` },
      { src: `${base_url}js/lib/swiper.js?388383` },
      { src: `${base_url}js/common.js?388383` },
      { src: `${base_url}js/front.js?388383` },
      { src: `${base_url}js/loading.js?388383` },
      { src: `${base_url}js/member.js?388383` }
    ]
  },
  env: {
    base_url: base_url
  },
  /*z
  ** Global CSS
  */
  css: [
    // '~assets/css/style.css',
    // '~assets/css/lib/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    dir: 'docs',
    }
}
