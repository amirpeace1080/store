export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', link: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel:'stylesheet', href:'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v[X.Y.Z]/dist/font-face.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    [
      'nuxt-i18n',
      {
        locales: ['fa', 'en'],
        defaultLocale: 'fa',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              zaban_fa: 'persian',
              zaban_en: 'english',
              home: 'Home',
              product: 'Products',
            },
            fa: {
              zaban_fa: 'فارسی',
              zaban_en: 'انگلیسی',
              home: 'خانه',
              product: 'محصولات'
            }
          }
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
