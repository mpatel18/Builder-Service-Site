<template>
  <div id="app">
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Build.net</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#review">{{ $t('review_tag') }}</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item @click="changeLocale('en')">EN</b-dropdown-item>
                        <b-dropdown-item @click="changeLocale('es')">ES</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <div>
        <b-jumbotron bg-variant="secondary" text-variant="light" border-variant="dark">
            <template v-slot:header>Build.Net</template>
            <template v-slot:lead>
                {{ $t('descrip') }}
            </template>
            <hr class="my-4">
            <p>
               {{ $t('tag') }}
            </p>
        </b-jumbotron>
    </div>
    <h2 class="service_header"> {{ $t('s_title') }}</h2>
    <div class ="services">
      <!-- <section class="offers">
        <Services 
          v-for="offers in offers"
          :key="offers.title"
          :offers="offers"
        />
      </section> -->
    </div>
    <h2 id ="review" class ="review-header"> {{ $t('review_tag') }}</h2>
    <div class ="review">
      <!-- <section class = "reviews">
        <Reviews 
          v-for="reviews in reviews"
          :key="reviews.name"
          :reviews="reviews"
        />
      </section>
      <form id ="user-response" >
        <b-container fluid>
          <b-row class="my-1" v-for="type in types" :key="type">
            <b-col sm="3">
              <label :for="`type-${type}`">Type <code>{{ $t(type) }}</code>:</label>
            </b-col>
            <b-col sm="12">
               <input v-model="value" type="text" class="form-control" name="input">
            </b-col>
          </b-row>
        </b-container>
      </form> -->
    </div>
  </div>
</template>

<script>
// import Services from './components/Services.vue' 
// import Reviews from './components/Reviews.vue'
import i18n from '@/plugins/i18n';

export default {
  name: 'App',
  components: {
    // Services,
    // Reviews
  },
  data () {
    return {
      offers: [
        {
          title: 'Consulting',
          offer: 'C_Descrip'
        },
        {
          title: 'Management',
          offer: 'M_Descrip'
        },
        {
          title: 'Testing',
          offer: 'T_Descrip'
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
      ], 
      types: [
          'UserName',
          'Review',
          'Rating',
      ],
      value:null
    }
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale; 
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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  .service_header {
    padding-top: 20px;
  }

  .services {
    overflow: hidden; 
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

  .review-header {
    padding: 1%;
    color: black;
  }

  .review {
    background-color: #2c3e50;
    display: flex;
  }

  #user-response {
    padding-top: 2%;
    padding-left: 7%;
    padding-bottom: 2%;
  }

  .reviews {
    width: 50%;
    padding-top: 3%;
    padding-left: 15%;
    padding-bottom: 2%;
  }
</style>
