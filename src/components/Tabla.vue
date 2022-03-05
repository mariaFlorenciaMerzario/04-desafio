<template>
        <table class="table" :class="[colorTabla, fontColorTabla]">
            <thead>
                <tr>
                    <th scope="col">Nº de Tarea</th>
                    <th scope="col">Descripción</th>
                </tr>
            </thead>
        <tbody>
            <tr v-for="(item, i) in tareasTabla" :key="i" :class="bgColorTablaSuccess">
                <td>{{item.id}}</td> 
                <td>{{item.descripcion}}</td>
              
            </tr>
        </tbody>
    </table>
</template>
<script>
  
  

  export default {
    name: 'Tabla',
    data: () => ({
  
          
    }),
      props: ['tareasTabla','bgColorTablaSecondary','bgColorTablaSuccess', 
        'colorTabla','fontColorTabla'],
     methods:{
       
    },
  }
</script>
