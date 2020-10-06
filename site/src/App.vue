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
    <div class ="review">
      <section class = "reviews">
        <Reviews 
          v-for="reviews in reviews"
          :key="reviews.name"
          :reviews="reviews"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Description from './components/Description.vue'
import Services from './components/Services.vue'
import Reviews from './components/Reviews.vue'

export default {
  name: 'App',
  components: {
    Header,
    Description,
    Services,
    Reviews
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
      ],
      reviews: [
        {
          name: 'User 1',
          review: "This was a great site to build my service on",
          stars: 5
        },
        {
          name: 'User 2',
          review: "I was able to do the most with what offered here",
          stars: 4
        },
        {
          name: 'User 3',
          review: "I'm glad I went with this, great template site",
          stars: 5
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
