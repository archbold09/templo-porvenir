<template>
<div class="transition">
      
  
  <template>
    <div class="float-lg">

      <v-parallax class="img-fluid" src="/home.png" height="500">
        <v-container fluid>
          <v-row>
            <v-col cols="12">     
              <v-row align="center" justify="center">
                <v-col cols="12" class="pt-12">
                </v-col>
              </v-row> 
            </v-col>
            <v-col cols="12">
              <v-row align="center" justify="center">
                <v-btn fab small class="mx-2 primary"> 
                  <v-icon color="white">mdi-facebook</v-icon>
                </v-btn>
                <v-btn fab small class="mx-2 primary"> 
                  <v-icon color="white">mdi-instagram</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>

      <v-sheet color="#0065A3">
        <v-container>
          <v-row justify="center" align="center">
          <div class="text-center">
            <p class="title text-center white--text mt-5"> <v-icon color="white" size="40">mdi-map-marker</v-icon> Calle E, San Isidro, San Miguelito </p>
            <p class="title pl-12 pr-12 pt-5  white--text">  Estaremos encantados de poder darte la bienvenida en nuestras reuniones. </p>
          </div>
            <div class="container text-center">
              <v-btn class="mx-2" dark rounded large outlined>Miercoles 7:30pm a 9:30pm</v-btn>
              <v-btn class="mx-2" dark rounded large outlined>Viernes 7:30pm a 9:30pm</v-btn>
              <v-btn class="mx-2" dark rounded large outlined>Domingo 9:30am a 12:00pm</v-btn>
            </div>
          </v-row>
        </v-container>
      </v-sheet>  

      <section class="section1">
        <v-container class="fill-height pt-12 pb-12">
          <v-row justify="center" align="center">
            
            <div class="text-center">
              <h1 class="font-weight-bold display-3 "> Bienvenido a Casa </h1>
              <h2 class="display-1"> Siempre. Sólo. Jesús. </h2>
              <p class="title pl-12 pr-12 pt-5"> 
                La Iglesia Hillsong tiene una gran influencia en el mundo a través de 
                la edificación de una gran iglesia Cristo-céntrica, basada en la Biblia, 
                que ha cambiado las mentalidades y equipar a las personas a liderar e impactar en todos los ámbitos de la vida.
              </p>
            </div>

          </v-row>
        </v-container>
      </section>

      <section class="section2 pt-12 pb-12">
        <v-container class="fill-height mt-12 mb-12 pt-12 pb-12">
          <v-row justify="center" align="center">
            
            <div class="text-center">
              <h1 class="font-weight-bold display-3  white--text"> Horario de reuniones </h1>
              <h2 class="display-1  white--text"> Domingos </h2>
              <p class="title pl-12 pr-12 pt-5  white--text"> 
                Estaremos encantados de poder darte la bienvenida este Domingo en nuestras reuniones.
              </p>
            </div>
            <div class="container text-center">
              <v-btn class="mx-2" dark rounded large outlined>10:00 H</v-btn>
              <v-btn class="mx-2" dark rounded large outlined>12:00 H</v-btn>
              <v-btn class="mx-2" dark rounded large outlined>17:30 H</v-btn>
              <v-btn class="mx-2" dark rounded large outlined>19:30 H</v-btn>
            </div>

          </v-row>
        </v-container>
      </section>

      <v-parallax class="img-fluid" src="ubicacion.jpg" height="500">
        <v-container fluid>
          <v-row>
            <v-col cols="12">     
                <v-row align="center" justify="center">
                    <v-col cols="12" class="pt-12">
                      <div class="text-center">
                        <h1 class="font-weight-bold display-3  white--text"> Ubicación </h1>
                        <h2 class="display-1  white--text"> Sala Astoria </h2>
                        <p class="title pl-12 pr-12 pt-5  white--text"> 
                          Sala Astoria, Carrer de París, 193 – 197, Barcelona
                        </p>
                        <v-row align="center" justify="center">
                          <v-btn rounded class="mx-2" dark outlined> 
                            <v-icon left >mdi-map-marker</v-icon>
                            VISÍTANOS
                          </v-btn>
                        </v-row>
                      </div>
                    </v-col>
                </v-row> 
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>

      <section class="section3 pt-12">
        <v-container class="fill-height">
          <v-row justify="center" align="center">
            <v-col cols="12">

              <div class="text-center">
                <h1 class="font-weight-bold display-3  white--text"> Departamentos </h1>
                <p class="title pl-12 pr-12 pt-5  white--text"> 
                  <b> El Templo El Por Venir </b> cuenta con diez departamentos,
                  los cuales desarrollan sus funciones con el propósito de edificar y bendecir a sus miembros.
                </p>
                <div class="pt-12 container">      
                  <div class="row">

                    <div class="col-md-4" v-for="(item,index) in conectar" :key="index">
                      <div class="text-center white--text">
                        <v-card shaped tile hover>
                          <v-card-subtitle class=" title pb-0 font-weight-bold">{{item.title}}</v-card-subtitle>

                          <v-card-text class="subtitle-1">
                            <div>{{item.text}}</div>
                          </v-card-text>
                        </v-card>
                        
                      </div>
                    </div>         

                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
      
      <!--
        <section class="pt-6">
          <div class="container">
            <h1 class="display-1 text-center font-weight-bold"> Vida de la iglesia </h1>
            <div class="container">      
              <div class="row">

                <div class="col-md-4" v-for="(item,index) in 6" :key="index">
                  <v-card class="mx-auto" max-width="400">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>Whitehaven Beach</div>

                      <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        color="orange"
                        text
                      >
                        Share
                      </v-btn>

                      <v-btn
                        color="orange"
                        text
                      >
                        Explore
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>         

              </div>
            </div>
          </div>
        </section>
      -->

      <!--
        <section class="section4 pt-12 pb-12">
          <v-container class="fill-height pt-12 pb-12">
            <v-row justify="center" align="center">
              
              <div class="text-center">
                <h1 class="font-weight-bold display-3 "> Peticiones De Oración </h1>
                <h2 class="display-1"> Creemos en el poder de la oración </h2>
                <p class="title pl-12 pr-12 pt-5"> 
                  Escríbenos tus peticiones al email <span class="blue--text"> ejemplo@gmail.com </span>
                </p>
              </div>

            </v-row>
          </v-container>
        </section>
      -->

      <v-parallax class="img-fluid" src="/fondo.jpg" height="500">
        <v-container fluid>
          <v-row>
            <v-col cols="12">     
              <v-row align="center" justify="center">
                  <v-col cols="12" class="pt-12">
                    <div class="text-center">
                      <h1 class="font-weight-bold display-3 white--text"> Trabajo misionero </h1>
                      <p class="headline pl-12 pr-12 pt-5 white--text"> 
                        El Templo El Por Venir desarrolla trabajo misionero en la provincia de Darién y 
                        Coclé, administra un comedor infantil en la comunidad de Ipetí, con los indígenas de 
                        la Etnia Emberá-Wounaan. A demás de la construcción de un Templo en la comunidad de la Esperanza, 
                        Corregimiento de Alcalde Díaz.
                      </p>
                    </div>
                  </v-col>
              </v-row> 
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
      
    </div>
  </template>

</div>
</template>

<script>
export default {
    data: () => ({
     conectar:[

       {title:'⦁	Educación Cristiana',text:' Formación y enseñanzas bíblicas.'},
       {title:'⦁	Damas',text:'Apoyan con distintas actividades sociales y beneficios.'},
       {title:'⦁	Caballeros',text:'Actividades y apoyo en el mantenimiento del Templo.'},
       {title:'⦁	Niños',text:'Equipo de maestros(as) que educan a nuestros niños en el conocimiento de la palabra de Dios y valores.'},
       {title:'⦁	Evangelismo',text:'Trabaja en la promulgación del evangelio con diversas actividades y ministerios.'},
       {title:'⦁	Música',text:'Se encarga de la ministración musical en los servicios que se ofrecen en el Templo, tales como: Cultos, bodas, sepelios y en las actividades especiales de cada uno de los distintos departamentos.'},
       {title:'⦁	Ujieres',text:'Encargados de velar por el orden dentro del Templo durante el servicio, recoger las ofrendas y asistir a los invitados.'},
       {title:'⦁	Detalles',text:'Se encarga de festividades y decoración del Templo.'},
       {title:'⦁	Ayuno y oración',text:'Departamento con la responsabilidad de mantener la llama espiritual encendida. Se compone por grupo de la congregación que ora a las 5:00am de lunes a viernes, que además dirige los ayunos congregacionales.'},
       {title:'⦁	Misiones',text:'Se encargará de la logística y los puntos de predicación en Campos Blancos (nuevos) y obras establecidas.'},
     ] 
    }),
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      })
    }
}
</script>

<style>
  .section0{
    background-color:#9D815B
  }
  .section1 {
    background-color: #EAEAEA;
  }
  .section2 {
    background-color: #1F1F1F;
  }
  .section3 {
    background-color: #00AADD;
  }
  .section4 {
    background-color: #EAEAEA;
  }
</style>