import Vue from 'vue'
import Vuex from 'vuex'
import { fb, db } from '@/firebase'
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
    },
    uploadFile({ commit }, { folder, file }) {
      return new Promise((resolve, reject) => {
        commit('SET_OVERLAY', true)
        var storageRef = fb.storage().ref(`${folder}/`+`${new Date().getTime()}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on('state_changed', snapshot => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress)
        }, err => {
          alert(err.message)
          reject(false)
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then( url => {
            resolve(url)
          })
        })
      }).finally(() => commit('SET_OVERLAY', false))
    },
    save({ commit, dispatch }, { collection, data }) {
      return new Promise((resolve, reject) => {
        dispatch({ type: 'uploadFile', folder: collection, file: data.resume }).then((url) => {
          commit('SET_OVERLAY', true)
          data['createdAt'] = new Date().getTime()
          data['updatedAt'] = new Date().getTime()
          data['resume'] = url
          db.collection(collection).add(data).then(() => {
            alert('You have successfully applied for the job. Please wait, we\'ll contact you soon. Thank you')
            resolve()
          }).catch(e => {
            alert(e.message)
            reject(e)
          })
        })
      }).finally(() => commit('SET_OVERLAY', false))
    }
  },
  modules: {
  }
})
