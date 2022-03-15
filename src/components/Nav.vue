<template>
  <div class="ma-12 pa-12 d-flex">
    <!-- <v-card class="position-absolute">
      <v-navigation-drawer class="bg-danger d-flex justify-content-end"
        permanent -->
    <v-card class="position-absolute">
      <v-navigation-drawer
        permanent
        expand-on-hover
      >
        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Carrito</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Listado</v-list-item-title>
          </v-list-item>

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
                  <Login />

                  </v-btn>
                </template>
              </v-dialog>
            </v-row>
                    
<!-- fin modal -->

        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>

import Login from './Login.vue'
 export default {  
    name: 'Nav',  
    components:{
        Login
    },
      data(){
        return{  
              loginVariable: false,
              dialog:false,
        }    
      },
        methods:{ 
          loginVariableMethod: function(){
              return this.loginVariable = true;
          },
        },
    }
</script>