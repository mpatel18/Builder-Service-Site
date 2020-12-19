<template>
  <div class="information">
      Our Contact Info
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: "Information",
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
}; 
</script>

<style lang="scss" scoped>

</style>