<template>
  <div>    
      <Nav/> 

     <!-- <div v-if="this.banderita===1">-->
        <Carrito class="d-flex justify-content-end"/>
         
     <!--</div> -->
          <p class="mx-3 text-center">Proyecto Final Entrega 01</p>
              <div class="m-3">
                  <p class="h2 text-center bg-light p-2 m-3">Listado de Platos</p>
              </div>
            <!-- grid -->
    <v-container>
      <div>
      <v-row  
        n o-gutters
        style="height: 150px;"
        class="d-flex text-center"
      >
         <v-col class="m-2" cols="3" sm="3" md="3" 
           v-for="(producto, i) in arrayProductos" :key="i"
         >
            <!-- aca empieza la card -->

              <v-card
                  :loading="loading"
                   max-width="374"
                   class="p-4 text-center d-flex justify-content-center flex-column align-items-center"
                >
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    v-model="imagenPadre"
                 
                  ></v-img>

                  <v-card-title>
                     <input type="text" :id="nombrePadre" :nombrePadre='producto.nombre'
                      :value='producto.nombre' />
                      
                     <!-- {{producto.nombre}} -->
                     
                  </v-card-title>

                  <v-card-text class="p-2">
                    <v-row
                      align="center"
                      class="mx-0"
                    >   
                    </v-row>

                    <v-card-text>
                       <input type="text" id="descripcionPadre" :descripcionPadre="producto.descripcion"
                      :value='producto.descripcion'/>
             
                    </v-card-text>
                   $ <input type="text" class="text-center" id="precioPadre" :precioPadre="producto.precio"
                      :value='producto.precio'/>
                  </v-card-text>
        
                  <!-- aca empieza la modal -->
          <template>
            <div data-app class="m-2">
             <v-row justify="center">
              <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <modal-comprar
                        :nombre='producto.nombre'
                        :descripcion='producto.descripcion'
                        :precio='producto.precio'
                        :imagen='producto.imagen'
                        :dialog='false'   
                        :array='arrayProductos'
                        :carritoVacio='0'
                    />
                  </v-btn>
                </template>
              </v-dialog>
            </v-row> 
            </div>          
          </template>

                  <!-- <div data-app class="m-2">
                          
                        <modal-comprar
                            :nombre='producto.nombre'
                            :descripcion='producto.descripcion'
                            :precio='producto.precio'
                            :imagen='producto.imagen'
                            :dialog='false'   
                            :array='arrayProductos'
                            :carritoVacio='0'
                        />
                  </div> -->
              </v-card>
            <!-- aca termina la card -->
        </v-col>
      </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>

import Nav from './Nav.vue'
import Carrito from './Carrito.vue'
import ModalComprar from './ModalComprar.vue'

export default {  
    name: 'Split',  
    components:{
        Nav,
        ModalComprar,
        Carrito
    },

    data(){
        return{  
              loading: false,
              selection: 1,
              producto:'',
              dialog:false, 
              nombrePadre:'',
              descripcionPadre:'',
              precioPadre:'',
              imagenPadre:'',
              carritoVacio: 0,
           
              arrayProductos:[
                { 
                    id:1,
                    nombre: "Milanesa con puré",
                    unidadMedida: "Porción",
                    precio: 650,
                    descripcion:"Una excelente elección para disfrutar solo a acompañado",
                    categoria: "Plato Principal",
                    imagen:"'=xxx.png'"
                 },

                 { 
                    id:2,
                    nombre: "Ravioles a la Scarparo",
                    unidadMedida: "Porción",
                    precio: 450,
                    descripcion:"Una alternativa deliciosa",
                    categoria: "Plato Principal",
                    imagen:"'=xxx.png'"
                 },

                 { 
                    id:3,
                    nombre: "Souflee de Calabaza",
                    unidadMedida: "Porción",
                    precio: 350,
                    descripcion:"Una alternativa saludable",
                    categoria: "Plato Principal",
                    imagen:"'=xxx.png'"
                 },

                { 
                    id:4,
                    nombre: "Tarta de Jamón y Queso",
                    unidadMedida: "Porción",
                    precio: 350,
                    descripcion:"Una excelente opción",
                    categoria: "Plato Principal",
                    imagen:"'=xxx.png'"
                 },

                 { 
                    id:5,
                    nombre: "Matambrito de cerdo con Batatas doree",
                    unidadMedida: "Porción",
                    precio: 600,
                    descripcion:"Deleitate con esta deliciosa alternativa",
                    categoria: "Plato Principal",
                    imagen:"'=xxx.png'"
                 },

                  { 
                    id:6,
                    nombre: "Vacío al horno con Papas Fritas",
                    unidadMedida: "Porción",
                    precio: 600,
                    descripcion:"Una excelente opción",
                    categoria: "Plato Principal",
                    imagen:"'=xxx.png'"
                 },
            ],
        
             alignments: [
                'start',
                'center',
                'end',
             ],
        }
    },
        methods:{ 
          mostrarModal: function(){
              return document.getElementById('UserCreate').modal('show');
          },
        },

       computed:{
          /*nombrePadreComputed: function(){

            return this.document.getElementById('nombrePadre').value; 
          },*/
        },
      
        mounted(){
            return  
        }
      /*
      agregarTarea(){
            if(this.nuevaTarea !== ''){
                this.tareasForm.push({
                    id: 5,
                    descripcion:this.nuevaTarea,      
                    });
                    this.nuevaTarea='',
                    this.mostrarMsgDelHijo = false
                }else{      
                    this.mostrarMsgDelHijo = true 
                    this.userCreate = true
                }
    },
    */ 
  }
</script>
