<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .fade-enter, .fade-leave-to {
    opacity: 15%;
    transform: translateY(0em);
  }

  .fade-enter-active, .fade-leave-active { 
    transition: all 1.5s ease-in;
  }
</style>
