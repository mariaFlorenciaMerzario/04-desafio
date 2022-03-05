<template>
   
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Atención</h5>
         >
        </div>
        <div class="modal-body">
          Tenés que ingresar una Tarea, el campo está vacío
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>

   
</template>

<script>
  export default {
    name: 'ModalVacio',

     data: () => ({
       mensaje: 'Completa la descripción de la nueva tarea, es un mensaje de componente hijo a padre',
    }),
     
     methods:{
       
    },
  }
</script>
