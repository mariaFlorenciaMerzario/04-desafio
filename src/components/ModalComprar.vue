<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="450"
    >
      <template v-slot:activator="{ on, attrs }">

        <v-list-item link
          v-bind="attrs"
          v-on="on"
        >
            <v-list-item-title>Comprar</v-list-item-title>
           </v-list-item>
      </template>
 
      <v-card>
           <v-card-title class="text-h5">
          {{nombre}}
          </v-card-title>
      
           <v-card-text>
              {{descripcion}}
           </v-card-text>

            <v-card-text>
              ${{precio}}-
           </v-card-text>

          <!-- inicia el select -->

          <label>Cantidad</label>
          <v-select 
              v-model="cantidad" 
              :items="cantidadNumeros" 
              item-text="cantidad"
              class="w-25 m-auto"
          ></v-select>

           <!-- termina el select -->
            <v-card-text>
              Total: ${{precio * this.cantidad}}-
           </v-card-text>
           <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agregar
           <!-- enviar info a carrito -->
            <!-- <Carrito /> -->
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          
          >
          
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-row>
</template>

<script>

import Split from './Split.vue'
import Carrito from './Carrito.vue'

 export default {
      name: 'ModalComprar',
      Components:{
         Split,
         Carrito,
      },
   props: ['nombre','descripcion','precio','imagen','array','carritoVacio'],

      data () {
        return {
          dialog: false,
          valid:true,  
          cantidadNumeros:[1,2,3,4,5,6,7,8,9,10],
          selected:'',
          cantidad:0,
          resultado:0,
          banderita:'false',
        }
    },
  /*
  methods:{ 
          dialogMethod: function(){
              this.banderita =1;
               this.dialog = false;
             
              this.array.push({
              nombre:this.nombre,
              descripcion:this.descripcion,
              precio:this.precio,
              cantidad:this.cantidad
            })
              return this.array
              //quiero enviar al carrito este array y mostrarlo
          },
        },
    */
  }
</script>

