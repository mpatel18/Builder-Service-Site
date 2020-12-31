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

    .title { 
      opacity: 15%;
      position: absolute;
      z-index: 0;
      font-family: 'Segoe UI', sans-serif, monospace;
    }

    h1 {
      color: white;
      font-size: 300px;
      font-style: bold; 
    }
  }
</style>