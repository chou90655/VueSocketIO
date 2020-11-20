<template>
  <div id="app">
    <div id="nav">
      <button @click="send">aaaaaa</button>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.sockets.subscribe('relogin', (data) => {
      console.log(data)
    })
  },
  methods: {
    send() {
      this.$socket.emit('login', {
        username: 'username',
        password: 'password'
      })
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
