import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/estilos.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  vuetify,
  
  render: h => h(App)
}).$mount('#app')
