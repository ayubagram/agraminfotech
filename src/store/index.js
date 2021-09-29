import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overlay: false,
    request_quote: false,
  },
  mutations: {
    SET_OVERLAY: (state, payload) => state.overlay = payload,
    SET_REQUEST_QUOTE: (state, payload) => state.request_quote = payload
  },
  actions: {
    async sendMessage({ commit }, { form }) {
      commit('SET_OVERLAY', true)
      form['createdAt'] = new Date().getTime()
      form['updatedAt'] = new Date().getTime()
      await db.collection('messages').add(form).then(() => alert('Your request has been recorded successfully. We will get back to you as soon as possible.'))
      .catch( e => {
        console.log(e)
        alert(e.message)
      })
      commit('SET_OVERLAY', false)
    }
  },
  modules: {
  }
})
