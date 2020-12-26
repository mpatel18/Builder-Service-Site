<template>
  <div class="offer">
      <div class="title">
          <h1>OFFERS</h1>
      </div>
      <Info/>
  </div>
</template>

<script>
import Info from '@/components/Info.vue'

export default {
    name: "Offer",
    components: {
      Info
    }
}
</script>

<style lang="scss" scoped>
  .offer {
    background: #443EAD;
    height: 100vh;
  }
</style>