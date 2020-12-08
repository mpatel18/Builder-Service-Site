<template>
  <div class="home">
    <Main 
        msg="A Tagline For Your Service" 
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices, lacus ut fermentum malesuada, 
                 orci ex ultricies mauris, tempus congue nisi orci eget urna." 
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    Main
  }
}
</script>
