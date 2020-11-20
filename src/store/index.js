import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 1
  },
  mutations: {
  },
  actions: {
    SOCKET_connect(Store, v) {
      console.log(v, 3333)
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
