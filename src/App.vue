<template>
  <div id="app">
    <scanner></scanner>
  </div>
</template>

<script>
import scanner from './components/Scanner'

export default {
  name: 'App',
  components: {
    scanner
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
  margin-top: 0;
}

    *
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    margin: 0;
    overflow-x: hidden;
}
</style>
