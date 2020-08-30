<template>
  <v-app>

    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed right temporary>
      <v-list dense>
        <v-list-item link nuxt to="/"  active-class="brown--text">
          <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar height="100px"
      :clipped-right="$vuetify.breakpoint.lgAndUp" app light>
       <nuxt-link to="/">
          <img src="/logotemplo.png" class="img-fluid" alt="LOGO TEMPLO EL PORVENIR">
       </nuxt-link>
      <v-spacer />
        <div class="hidden-sm-and-down">
          <v-btn text nuxt color="#0065A3" :to="item.to" v-for=" (item,index) in buttons " :key="index"> {{item.text}} </v-btn>        
        </div>
      <v-spacer />

      <div class="hidden-md-and-down">
        <v-btn outlined color="#0065A3" light @click.stop="drawer = !drawer">
          MENU 
          <v-icon right v-if="!drawer"> mdi-menu </v-icon>
          <v-icon right v-else> mdi-close </v-icon>
        </v-btn>
      </div>
      <div class="hidden-md-and-up">
        <v-btn outlined color="#0065A3" @click.stop="drawer = !drawer"> MENU </v-btn>
      </div>

    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

    <v-footer dark>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} Templo el Porvenir</div>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      buttons: [
        { text: 'Inicio', to: '/' },
        { text: 'Eventos', to: '' },
        { text: 'Horarios', to: '' },
        { text: 'Nosotros', to: '/nosotros' },
        { text: 'Imagenes', to: '' },
        { text: 'Visión', to: '' },
        { text: 'Ubicaciones', to: '' },
      ]
    }),
  }
</script>