<template>
  <div class="review">
      <h1>Review</h1>
      <UserReview 
        name='Mark Smith' 
        review='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt urna arcu, eget dapibus mauris accumsan non."'
      />
      <Form/>
  </div>
</template>

<script>
import UserReview from '@/components/UserReview.vue'
import Form from '@/components/Form.vue'
export default {
    name: "Review",
    components: {
      UserReview,
      Form
    }
}
</script>