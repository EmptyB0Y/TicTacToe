<template>
  <img id="logo" alt="Vue logo" src="./assets/logo.jpg">
  <GamePanel/>
</template>

<script>
import GamePanel from './components/Game.vue'

export default {
  name: 'App',
  components: {
    GamePanel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  height: 190px;
}
</style>
