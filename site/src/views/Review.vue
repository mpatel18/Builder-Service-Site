<template>
  <div class="review">
      <h1>Review</h1>
      <div class="content">
        <form action="">
            <h2>Write a Review</h2>
            <label for="fname">First Name</label>
            <input type="text" id="fname">

            <label for="lname">Last Name</label>
            <input type="text" id="lname">

            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>

            <button type="submit">Submit</button>
        </form>
        <UserReview 
        name='Mark Smith' 
        review='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt urna arcu, eget dapibus mauris accumsan non."'
        />
      </div>
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

<style lang="scss" scoped>
  
h1 {
    font-family: 'Segoe UI', sans-serif, monospace;
    font-size: 300px;
    color: #443EAD; 
    font-style: bold;
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: space-around;

    form {
      background-color: #443EAD;
      color: #FCF7FF; 
      border-radius: 1em;
      padding: 3em;

      h2 {
        padding-bottom: 1em;
        font-size: 25px;
        font-family: 'Roboto', sans-serif;
        font-style: bold;
      }

      label {
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
        }

        input[type=text], input[type=email], textarea {
            width: 100%;
            padding: 12px 10px;
            margin: 5px 0;
            display: block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            outline: none;
        }

        input[type=text]:focus, input[type=email]:focus, textarea:focus {
            border: 3px solid #484554; 
        }

        button {
            margin-top: 15px;
            padding: 1em 2em 1em 2em ; 
            border-radius: 1em;
            border-style: solid; 
            box-shadow: none;
            outline: none; 
            float: right;
            font-family: 'Roboto', sans-serif;
            background-color:  #484554;
            color: #FCF7FF; 
            cursor: pointer;
        }
    }
  }

</style>