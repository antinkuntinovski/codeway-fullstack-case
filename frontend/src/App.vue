<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background: #241936;
}
nav {
  padding: 30px;
  display: flex;
  justify-content: flex-end;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.logout{
  width: 100px;
  height: 50px;
  background: blue;
  color: white;
  border: 1px solid blue;
  border-radius: 20px;
  font-weight: bold;
  font-size: 20px;
  float: right;
  margin: 10px 30px;
}
</style>
