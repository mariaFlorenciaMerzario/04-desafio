
<template>
  <v-app>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >   
        <v-text-field
        v-model="name"
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

        <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
        ></v-select>

        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
        ></v-checkbox>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        >
        Validate
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Reset Form
        </v-btn>

        <v-btn
        color="warning"
        @click="resetValidation"
        >
        Reset Validation
        </v-btn>

         <!-- nombreHijo es igual al evento que se esta recibiendo
    trae el this.nombre del hijo o sea alert que esta en mounted -->
        <Alert class="ma-2" @nombredelHijo="nombrePadre =$event" :nombreDelHijo="nombreDelHijo">

        </Alert>
          <p>Nombre del hijo en el componente Padre:   {{nombrePadre}}</p>
    </v-form>
    <Icons />
  </v-app>

</template>
<script>
import Alert from './Alert.vue';

import Icons from './Icons.vue'

//import Tabla from './Tabla.vue';
//import VerMas from './VerMas.vue';
//import ModalVacio from './ModalVacio.vue'
export default {  
    name: 'Formulario', 
           
    components:{
        Icons,
        Alert
      /* Tabla,
        VerMas,
        ModalVacio,
        */
    },
     props: ['nombreDelHijo'],

    data: () => ({
      //  se sobre escribe con el nombre del hijo
            nombrePadre:'',
            nombre: 'Florencia',
            numeroPadre: 0,
            nombreForm: '',
            emailForm: '',
            textareaForm:'',
            bgColorForm:'bg-warning',
            bgColorTablaSecondaryForm:'bg-secondary',
            bgColorTablaSuccessForm:'bg-success',
            colorTablaForm:'',
            nuevaTarea:'',
            colorTablaFuente:'',
            verTabla: true,
            verMas: true,
            modal:'modal',
            azul:'#3a72aa',
            alert:false,
            mensajePadre:'',
            msgPink:'msgPink',  
            mostrarMsgDelHijo: false, 
            teclaPresionada: false,
            userCreate:false,
        
            tareasForm:[
                { id:1, descripcion: "Realizar tarea 1"},
                { id:2, descripcion: "Realizar tarea 2"},
                { id:3, descripcion: "Realizar tarea 3"},
                { id:4, descripcion: "Realizar tarea 4"},      
            ],
             valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),
  
     methods:{
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
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    
        },
  }
</script>
