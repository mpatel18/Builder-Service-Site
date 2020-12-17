<template>
  <div class="split-screen">
      <div class="side1">
          <router-link to="/offer" tag="button">What We Offer</router-link>
      </div>
      <div class="side2">
          <router-link to="/review" tag="button">What Our Users Think</router-link>
      </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
}; 
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

    .split-screen {
        display: flex;
        justify-content: space-around;
        height: 100vh;
        background: linear-gradient(90deg, #FCF7FF 50%, #443EAD 50%);
    }

    .side1, .side2 { 
        position: relative;
        text-align: center;
        top: 40%; 

        button { 
            background: transparent;
            border-color: black;
            border-radius: 1em;
            transition: border-radius ease 0.5s;
            color: black;
            font-weight: 600;
            font-size: 20px;
            font-family: 'Nunito', sans-serif;
            box-shadow: none;
            border-width: 10px 10px 10px 10px;
            border-style: solid; 
            outline: none; 
            padding: 4em;
            cursor: pointer;
        }

        button:hover {
            border-radius: 4em;
        }
    }
</style>