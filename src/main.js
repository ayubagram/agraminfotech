import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import VueFirestore from 'vue-firestore' 
require('firebase/firestore')
Vue.use(VueFirestore)

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import Techs from './components/Techs'
Vue.component('Techs', Techs)
import ContactForm from './components/ContactForm'
Vue.component('ContactForm', ContactForm)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
