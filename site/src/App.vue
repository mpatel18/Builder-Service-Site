<template>
  <div id="app">
    <Header />
    <Description class ="test" />
    <div class ="services">
      <section class="offers">
        <Services 
          v-for="offers in offers"
          :key="offers.title"
          :offers="offers"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Description from './components/Description.vue'
import Services from './components/Services.vue'

export default {
  name: 'App',
  components: {
    Header,
    Description,
    Services
  },
  data () {
    return {
      offers: [
        {
          title: 'Consulting',
          offer: 'The business of giving expert advice to other professionals, typically in financial and business matters.'
        },
        {
          title: 'Management',
          offer: 'Management is the coordination and administration of tasks to achieve a goal.'
        },
        {
          title: 'Testing',
          offer: 'Take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice.'
        }
      ]
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */

  .services {
    /* width: 100vw;
    min-width: 100vh;
    overflow: hidden; */

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .offers {
    display: flex; 
    /* max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
    font-size: 15px; */
  }

</style>
