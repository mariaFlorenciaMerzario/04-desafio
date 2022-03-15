<template>
  <div class="ma-12 pa-12 d-flex">
    <v-card class="position-absolute">
      
  <v-simple-table>
    <template v-slot:default>
      <thead class="centrar">
          <div class="h4 d-flex align-center text-danger m-4">Mi Carrito</div>
        <tr>
          <th class="text-left">
            Producto
          </th>
          <th class="text-left">
            Precio
          </th>
          <th class="text-left">
            Cant
          </th>
          <th class="text-left">
            Subtotal
          </th>
        </tr>
      </thead>
     
      <tbody  v-for="producto in arrayProductos"
          :key="producto.nombre">
        <tr>       
          <td>{{ producto.nombre }}</td>
          <td>${{ producto.precio }}</td>
          <td>{{ producto.cantidad}}</td>
          <td>${{producto.precio * producto.cantidad}}</td>
        </tr>
      </tbody>
      <!-- <div total>Total: {{total}} </div> -->
    </template>
  </v-simple-table>
    
     <v-btn
        color="green darken-1"
        text
        @click="dialog = false"
        class="btn btn-success text-white mx-2 my-4"
        >
        Pagar
        </v-btn>
    </v-card>
  </div>
 
</template>

<script>
  export default {
     name: 'Carrito',
     Components:{
       
     },

     props: ['nombre','descripcion','precio','imagen','cantidad','array'],
     data () {
        return {
            producto:'',

            arrayProductos:[
                { 
                    id:1,
                    nombre: "Milanesa con puré",
                    unidadMedida: "Porción",
                    precio: 650,
                    cantidad:2,
                    descripcion:"Una excelente elección para disfrutar solo a acompañado",
                    categoria: "Plato Principal",
                   
                 },

                 { 
                    id:2,
                    nombre: "Ravioles a la Scarparo",
                    unidadMedida: "Porción",
                    precio: 450,
                    cantidad:1,
                    descripcion:"Una alternativa deliciosa",
                    categoria: "Plato Principal",
                   
                 },
            ]
      }
    },
     computed(){
          return this.producto.precio * this.producto.cantidad
    }
  }
</script>


