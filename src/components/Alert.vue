
<template>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      type="success"
    >
     <p> Esta es un ventana modal!</p>
     <p>El nombre que tiene cargado el padre que viene del hijo es: {{nombreDelHijo}}</p>
     <input type="text" class="form-control" v-model.trim="datoModificado"
     placeholder="Modifica el dato que vino del hijo"/> 
     <button class="btn btn-success" @click="!true"></button>
         <div v-if="true">
            <Button :datoModificado="datoModificado" /> 
         </div>
    </v-alert>

    <div class="text-xs-center">
      <v-btn
        v-if="!alert"
        color="primary"
        dark
        @click="alert = true"
      >
      </v-btn>
    </div>
  </div>

</template>

<script>
import Button from './Button.vue'
  export default {
    data () {
      return {
        alert: true,
        numeroPadre: 2,
        nombreDelHijo: 'Juancito',
        datoModificado:'',
        true:false,
      }
    },
    
    components:{
        Button
    },
       props: ['numero'],

    mounted(){
    //cuando se cara el for vamos a pasar un evento
    this.$emit('nombreDelHijo', this.nombreDelHijo)
    },

  }
</script>
