<template>
    <div>
      <b-button v-b-modal.modal-center>Ver Más</b-button>

      <b-modal id="modal-center" centered title="Bienvenidos a VUE JS en Coderhuose">
        <p class="my-4">Ver mas.</p>
      </b-modal>
    </div>    
</template>

<script>
  export default {
    name: 'VerMas',
     props: ['tareasTabla','bgColorTablaSecondary','bgColorTablaSuccess', 
    'colorTabla','fontColorTabla','cardVerMas','dataBsTargetModal','data-toggle'],

    data: () => ({
       
    }),
     
     methods:{
       
    },
  }
</script>
