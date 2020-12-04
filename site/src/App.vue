<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home'; 

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  #app {
    text-align: center;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
</style>
