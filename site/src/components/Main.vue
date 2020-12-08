<template>
  <div class="main">
    <div class="main-container">
        <div class="nav-container">
            <header>logo</header>
            <nav class="navbar">
              <ul>
                  <li><a href="#">about</a></li>
                  <li><a href="#">service</a></li>
                  <li><a href="#">contact</a></li>
              </ul>
          </nav>
        </div>
        <div class="hero">
          <h1>{{ msg }}</h1>
          <p>{{ descrip }}</p>
        </div>
    </div>
    <!-- <svg width="970" height="1367" viewBox="0 0 970 1367">
          <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(18)" fill="#dfc7ff" stroke="#443ead" stroke-width="1" opacity="0.2">
            <ellipse cx="476" cy="451.5" rx="476" ry="451.5" stroke="none"/>
            <ellipse cx="476" cy="451.5" rx="475.5" ry="451" fill="none"/>
          </g>
          <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(0 451)" fill="#958bb6" stroke="#443ead" stroke-width="1" opacity="0.4">
            <ellipse cx="476" cy="458" rx="476" ry="458" stroke="none"/>
            <ellipse cx="476" cy="458" rx="475.5" ry="457.5" fill="none"/>
          </g>
      </svg> -->
  </div>
</template>

<script>
  import i18n from '@/plugins/i18n';

  export default {
    name: 'Main',
    props: {
      msg: String,
      descrip: String
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
  * {
    margin: 0;
    padding: 0;
    background: #443EAD;
    
  }

  // .main{
  //   display: flex;
  // }

  .nav-container {

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10em 20em;

    header { 
      color: #FCF7FF; 
      font-size: 50px;
      font-weight: bold;
      cursor: pointer;
    }

    ul { 
      display: flex;
      justify-content: space-evenly;

      li {
        list-style-type: none;
      }

      a { 
        display: block;
        padding: 0 1em; 
        color: #FCF7FF;
        font-size: 35px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  .hero { 

    padding-left: 20em;

    h1 { 
      color: #FCF7FF;
      font-size: 6em;
      font-weight: bold; 
    }

    p {
      padding-top: 2em; 
      color: #FCF7FF;
      font-size: 35px;
    }
  }
</style>
