<template>
  <div class="split-screen">
      <div class="side1">
          <button>What we offer</button>
      </div>
      <div class="side2">
          <button>What our users think</button>
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
            color: black;
            font-weight: 600;
            font-size: 20px;
            box-shadow: none;
            border-width: 10px 10px 10px 10px;
            border-style: solid; 
            outline: none; 
            padding: 4em;
            cursor: pointer;
        }
    }
</style>