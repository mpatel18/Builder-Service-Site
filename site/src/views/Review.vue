<template>
  <div class="review">
      <UserReview 
        name='Mark Smith' 
        review='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt urna arcu, eget dapibus mauris accumsan non."'
      />
  </div>
</template>

<script>
import UserReview from '@/components/UserReview.vue'
export default {
    name: "Review",
    components: {
      UserReview
    }
}
</script>