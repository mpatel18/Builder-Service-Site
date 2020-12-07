<template>
  <div class="main">
    <div>
        <div class="nav-container">
            <header>
                logo
            </header>
            <nav class="navbar">
            <ul>
                <li>about</li>
                <li>service</li>
                <li>home</li>
            </ul>
        </nav>
        </div>
        <h1>A tagline for your service</h1>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <div>
            <div class="block1"></div>
            <div class="block2"></div>
        </div>
    </div>
  </div>
</template>

<script>
  import i18n from '@/plugins/i18n';

  export default {
    name: 'Main',
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main {
      background: #1f1f1f;
  }

  .nav-container { 
      color: white; 
  }

  .block1 { 
      width: 500px;
      height: 500px; 
      background:rgb(143, 46, 46); 
  }

  .block2 {
      width: 500px;
      height: 500px; 
      background: purple;
  }
</style>
