import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(new VueSocketIO({
  debug: false,
  // 服务器端地址
  // connection: '//81.69.226.127:19967',
  // connection: '//42.192.6.140:19967',
  // connection: 'http://jiextx.com/',
  // connection: 'http://devwww.jiextx.com/',
  connection: '127.0.0.1:19967',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  options: { path: '/socket.io/' }
}))

new Vue({
  sockets: {
    connecting() {
      console.log('正在连接')
    },
    disconnect() {
      console.log('Socket 断开')
    },
    connect_failed() {
      console.log('连接失败')
    },
    connect() {
      console.log('连接成功')
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
