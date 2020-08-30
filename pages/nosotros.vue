<template>
<div class="transition">
      
  
  <template>
    <div class="float-lg">

      <section class="section1">
        <v-container class="fill-height pt-12 pb-12">
          <v-row justify="center" align="center">
            
            <div class="text-center">
              <h1 class="font-weight-bold display-3 "> Templo el Por Venir Asamblea de Dios </h1>
              <v-divider></v-divider>
                <p class="title pl-12 pr-12 pt-5">Fundada el <b> 22 de  Marzo de 1990 </b></p>
              <v-divider></v-divider>
              <p class="title pl-12 pr-12 pt-5"> 
                El <b> Pastor Gabriel Rodríguez </b> obedece el llamado del Señor para trabajar en el Valle de San Isidro, corregimiento del Distrito de San Miguelito (Distrito más grande del país), trabaja atendiendo situaciones como: Desintegración familiar, jóvenes en riesgo, pandillerismo y apoyo a personas desamparadas.
                La influencia del Templo El Por Venir a San Isidro ha sido positiva para muchas familias de la comunidad, ya que a través de la predica del evangelio se ha logrado transformar el ambiente y la seguridad en su entorno, hogares han salido adelante y un grupo de jóvenes que hoy son profesionales
                , gracias a la motivación e inspiración que recibieron del ministerio El Por Venir.
              </p>
            </div>

          </v-row>
        </v-container>
      </section>

      <section class="section1">
        <div class="container">
          <div class="row">

            <div class="col-md-6">
              <div class="text-center">

                <v-avatar size="150">
                  <img src="/mision.png" alt="Equipo Porvenir">
                </v-avatar>

                <v-card-subtitle class="display-1 pb-0 font-weight-bold">Misión</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Llevar el mensaje de esperanza y la ayuda necesaria a los lugares a donde nuestro Dios nos envíe, con personal capacitado en diversas áreas y comprometidos en ayudar al prójimo.</div>
                </v-card-text>
                
              </div>
            </div>    

            <div class="col-md-6">
              <div class="text-center">

                <v-avatar size="150">
                  <img src="/vision.png" alt="Equipo Porvenir">
                </v-avatar>

                <v-card-subtitle class="display-1 pb-0 font-weight-bold">Visión</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Proclamar el evangelio de Jesucristo en lugares de difícil acceso y apartados de las grandes ciudades, comunidades con pocos recursos o abandonadas por los gobiernos de turno.</div>
                </v-card-text>
                
              </div>
            </div>   

          </div>
        </div>
      </section>

    </div>

      <section class="section4 pt-12 pb-12">
        
        <div class="container">
          <h1 class="display-1 text-center font-weight-bold"> Equipo Templo El Por Venir </h1>
          <div class="container">      
            <div class="row">
              <div class="col-md-4" v-for="(item,index) in equipo" :key="index">
                <div class="text-center">

                  <v-avatar size="150">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ahmnB8Y19sgR71aPgXqe1VtgxcrpTSeV9Z5Ec7AGWVEp4NkaOg&s" alt="Equipo Porvenir">
                  </v-avatar>

                  <v-card-subtitle class=" headline pb-0 font-weight-bold"> {{item.nombre}} </v-card-subtitle>

                  <v-card-text class=" title text--primary">
                    <div>{{item.text}}</div>
                  </v-card-text>
                  
                </div>
              </div>         
            </div>
          </div>
        </div>

      </section>

  </template>
 
</div>
</template>

<script>
export default {
    data: () => ({
      equipo:[
        {nombre:'Pastor',text:'Revdo. Gabriel Rodríguez '},
        {nombre:'Pastor',text:'Caridad P. de Rodríguez'},
        {nombre:'Administrador Financiero',text:'Licdo. Omar Mendoza A.'}
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