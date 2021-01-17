export default {
  mode: 'spa',
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
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v[X.Y.Z]/dist/font-face.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/css/style.scss'
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

    'nuxt-i18n',
  ],

  i18n: {
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
          add_cart: 'Add To Cart',
          show_detail: 'Details',
          product_name: 'Product Name',
          product_category: 'Category',
          add_to_cart: 'Add to Cart',
          buy_now: 'Buy Now',
          users: 'Users',
          message: 'Message',
          detail_all: 'Detail All',
          city: 'City',
          street: 'Street',
          pelak: 'Pelak',
          code_posti: 'Zipcode',
          name: 'Name',
          last_name: 'Last Name',
          username: 'Username',
          email: 'Email',
          password: 'Password',
          phone: 'Phone',
          welcom_site: 'Welcom To Site',
          lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perspiciatis aut, possimus quos velit laboriosam accusantium maxime? Asperiores distinctio quidem impedit iure! Odio, assumenda! Iusto iure eum reiciendis perferendis quisquam?',
          ok: 'Ok',
          click_to_view: 'click to view',
          recent_popular_products: 'Recent popular products'
        },
        fa: {
          zaban_fa: 'فارسی',
          zaban_en: 'انگلیسی',
          home: 'خانه',
          product: 'محصولات',
          add_cart: 'اضافه کردن به سبد',
          show_detail: 'مشاهده',
          product_name: 'نام محصول',
          product_category: 'دسته بندی',
          add_to_cart: 'اضافه کردن به سبد',
          buy_now: 'خرید',
          users: 'کاربران',
          message: 'پیام',
          detail_all: 'مشخصات کامل',
          city: 'شهر',
          street: 'خیابان',
          name: 'نام',
          pelak: 'پلاک',
          code_posti: 'کدپستی',
          last_name: 'نام خانوادگی',
          username: 'نام کاربری',
          email: 'ایمیل',
          password: 'گذر واژه',
          phone: 'شماره تلفن',
          welcom_site: 'درود! خوش اومدین!',
          lorem: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          ok: 'خب باشه',
          click_to_view: 'برای نمایش کلیک کنید',
          recent_popular_products: 'محصولات پربازدید اخیر'
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
