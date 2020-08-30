
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Templo el Porvenir ',
    title: 'Templo el Porvenir',
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Templo el Porvenir - PANAMÁ', name: 'Pagina web de el Templo el Porvenir', content: 'Conozca más acerca de nosotros.' },
      { name: 'google-site-verification', content: 'FcgFcOKeNazZH7agqAEoEJrhHz-CH2izHBV0C2mBGqI' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      
    ]
  },

  loading: { color: 'primary' , height: '10px' },

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
