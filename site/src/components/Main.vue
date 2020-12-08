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
          <button>Learn More</button>
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  .main {
    background: #443EAD;
  }

  .main-container{
    position: relative;
    height: 100vh; 
    z-index: 2;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 7em 15em;

    header { 
      color: #E8D5B5; 
      font-size: 45px;
      font-family: 'Nunito', sans-serif;
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
        font-size: 30px;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
      }
    }
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
      border-radius: 25px;
      border-style: solid; 
      outline: none; 
      padding: 0.5em 3.5em 0.5em 3.5em;
      font-family: 'Nunito', sans-serif;
      cursor: pointer;
    }
  }

  .design { 
    position: fixed;
    top: 0; 
    right: 0;
    z-index: 1;
  }
</style>
