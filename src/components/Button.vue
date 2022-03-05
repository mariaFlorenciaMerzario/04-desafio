<template>
  <div>
      <div>Dato Modificado{{datoModificado}}</div>
  </div>


</template>



<script>
  export default {  
    data () {
      return {
          nombreInputDelHijoAlPadre:'',
      }
    },
    props: ['datoModificado'],

     mounted(){
        //cuando se cara el for vamos a pasar un evento
    //    this.$emit('nombreInputDelHijoAlPadre', this.nombreInputDelHijoAlPadre)
    },
    
     methods:{
         pasarParametroAlPadre(){
             this.$emit('nombreInputDelHijoAlPadre', this.nombreInputDelHijoAlPadre)
         }
     }
  }
</script>