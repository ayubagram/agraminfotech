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

Vue.mixin({
  data: () => ({
    technology: [
      { title: 'HTML5', color: 'backgroundColor: rgb(230 81 0 / 10%);', img: require('@/assets/techs/html5.png')},
      { title: 'CSS3', color: 'backgroundColor: rgb(2 119 189 / 10%);', img: require('@/assets/techs/css3.png')},
      { title: 'Java', color: 'backgroundColor: rgb(94 82 255 / 10%);', img: require('@/assets/techs/java.png')},
      { title: 'Flutter', color: 'backgroundColor: rgb(1 87 155 / 10%);', img: require('@/assets/techs/flutter.png')},
      { title: 'React Native', color: 'backgroundColor: rgb(129 222 234 / 10%);', img: require('@/assets/techs/react.png')},
      { title: 'Vue.JS', color: 'backgroundColor: rgb(129 199 132 / 10%);', img: require('@/assets/techs/vue.png')},
      { title: 'XD', color: 'backgroundColor: rgb(147 38 231 / 10%);', img: require('@/assets/techs/xd.png')},
      { title: 'Node.JS', color: 'backgroundColor: rgb(55 71 79 / 10%);', img: require('@/assets/techs/node.png')},
      { title: 'MongoDB', color: 'backgroundColor: rgb(93 64 55 / 10%);', img: require('@/assets/techs/mongodb.png')},
      { title: 'PHP', color: 'backgroundColor: rgb(141 109 159 / 10%);', img: require('@/assets/techs/php.png')},
      { title: 'Laravel', color: 'backgroundColor: rgb(232 42 57 / 10%);', img: require('@/assets/techs/laravel.png')},
      { title: 'MySql', color: 'backgroundColor: rgb(68 121 161 / 10%);', img: require('@/assets/techs/mysql.png')},
      { title: 'Android', color: 'backgroundColor: rgb(141 170 34 / 10%);', img: require('@/assets/techs/android.png')},
      { title: 'Firebase', color: 'backgroundColor: rgb(255 111 0 / 10%);', img: require('@/assets/techs/firebase.png')},
      { title: 'React.JS', color: 'backgroundColor: rgb(128 222 234 / 10%);', img: require('@/assets/techs/react.png')},
      { title: 'Python', color: 'backgroundColor: rgb(2 119 189 / 10%);', img: require('@/assets/techs/python.png')},
      { title: 'Angular', color: 'backgroundColor: rgb(183 28 28 / 10%);', img: require('@/assets/techs/angular.png')},
      { title: 'WordPress', color: 'backgroundColor: rgb(1 87 155 / 10%);', img: require('@/assets/techs/wordpress.png')}
    ]
  })
})

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
