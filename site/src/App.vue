<template>
  <div id="app">
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#services">Build.net</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Services</b-nav-item>
                    <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <!-- <b-nav-form> 
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form> -->

                    <b-nav-item-dropdown text="Lang" right disabled>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right disabled>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <div>
        <b-jumbotron bg-variant="secondary" text-variant="light" border-variant="dark">
            <template v-slot:header>Build.Net</template>

            <template v-slot:lead>
                Your one template to design, build, and customize your service of 
                tomorrow, today. 
            </template>

            <hr class="my-4">

            <p>
                Designed to get you up and running.
            </p>
        </b-jumbotron>
    </div>
    <div class ="services">
      <section class="offers">
        <Services 
          v-for="offers in offers"
          :key="offers.title"
          :offers="offers"
        />
      </section>
    </div>
    <h2 class ="review-header">Reviews</h2>
    <div class ="review">
      <section class = "reviews">
        <Reviews 
          v-for="reviews in reviews"
          :key="reviews.name"
          :reviews="reviews"
        />
      </section>
      <div class ="user-response">
        <b-container fluid>
          <b-row class="my-1" v-for="type in types" :key="type">
            <b-col sm="3">
              <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
            </b-col>
            <b-col sm="12">
              <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
            </b-col>
          </b-row>
      </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import Services from './components/Services.vue'
import Reviews from './components/Reviews.vue'

export default {
  name: 'App',
  components: {
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
      ], 
      types: [
          'UserName:',
          'Review:',
          'Rating:',
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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

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

  .review-header {
    padding: 2%;
    color: black;
  }

  .review {
    background-color: #2c3e50;
    display: flex;
  }

  .user-response {
    padding-top: 3%;
    padding-left: 10%;
    padding-bottom: 2%;
  }

  .reviews {
    width: 50%;
    padding-top: 3%;
    padding-left: 15%;
    padding-bottom: 2%;
  }

</style>
