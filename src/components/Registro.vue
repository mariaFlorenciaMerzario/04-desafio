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
           <v-list-item-title>Registro de Usuario</v-list-item-title>
           </v-list-item>
      </template>
      <v-card>
<v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="p-3"
  >
    <v-text-field
      v-model="nombre"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

  <v-text-field
      v-model="password"
      :counter="10"
      :rules="nameRules"
      label="Password"
      required
    >
    </v-text-field>


      <v-btn
        color="green darken-1"
        text
        @click="dialog = false"
        class="bg-primary m-3"
      >
        Confirma
      </v-btn>

     <v-btn
        color="green darken-1"
        text
        @click="dialog = false"
        class="bg-danger"
      >
        Cancela
      </v-btn>
     
  </v-form>
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Registro from './Registro.vue'
  export default {
  components: { 

   },  
  
    name: 'Registro',
    
    Components:{
      Registro,
    },

    data: () => ({
      valid: true,
      dialog:false,
      nombre:'',
      email:'',
      password:'',  
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 10) || 'Debe contener no mas de 10 caracteres',
      ],
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail con formato inválido',
      ],
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },

      registroTrue () {
        return this.registroVar = true;
      },
     
    },
  }
</script>