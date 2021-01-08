<template>
  <div class="main">
    <div class="main-container">
        <Navbar/>
        <div class="hero">
          <h1>{{ msg }}</h1>
          <p>{{ descrip }}</p>
          <router-link to="/about" tag="button">Learn More</router-link>
        </div>
    </div>
    <svg class="design" width="934" height="1322" viewBox="0 0 934 1322">
      <g id="Design" transform="translate(-1020)" opacity="0.6">
        <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(1020 419)" fill="#dfc7ff" stroke="#443ead" stroke-width="1" opacity="0.2">
          <ellipse cx="467" cy="451.5" rx="467" ry="451.5" stroke="none"/>
          <ellipse cx="467" cy="451.5" rx="466.5" ry="451" fill="none"/>
        </g>
        <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(1020)" fill="#dfc7ff" stroke="#443ead" stroke-width="1" opacity="0.2">
          <ellipse cx="467" cy="451.5" rx="467" ry="451.5" stroke="none"/>
          <ellipse cx="467" cy="451.5" rx="466.5" ry="451" fill="none"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import i18n from '@/plugins/i18n';

  export default {
    name: 'Main',
    props: {
      msg: String,
      descrip: String
    },
    components: {
      Navbar
    }, 
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  .main {
    background: #443EAD;
    height: 100vh;
  }

  .main-container{
    position: relative; 
    z-index: 2;
  }
  
  .hero { 
    padding-left: 15em;

    h1 { 
      color: #FCF7FF;
      font-size: 6em;
      font-weight: 700; 
      font-family: 'Roboto', sans-serif;
      width: 50%; 
    }

    p {
      padding: 2em 0em 2em 0em; 
      color: #FCF7FF;
      font-size: 2.15em;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      width: 65%; 
    }

    button { 
      background: #443EAD;
      border-color: #E8D5B5;
      color: #E8D5B5;
      font-weight: 600;
      font-size: 20px;
      box-shadow: none;
      border-width: 10px 10px 10px 10px;
      border-radius: 1em;
      transition: border-radius ease 0.5s;
      border-style: solid; 
      outline: none; 
      padding: 0.5em 3.5em 0.5em 3.5em;
      font-family: 'Nunito', sans-serif;
      cursor: pointer;

      &:hover {
        border-radius: 2em;
      }
    }
  }

  .design { 
    position: fixed;
    top: 0; 
    right: 0;
    z-index: 1;
  }
</style>
