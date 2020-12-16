<template>
  <div class="split-screen">
      <div class="side1">
          What we offer
      </div>
      <div class="side2">
          What our users think
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
        justify-content: space-evenly;
    }
</style>