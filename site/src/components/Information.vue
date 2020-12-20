<template>
  <div class="information">
      <div class="info-form">
          <h2>Contact Us</h2>
          <form action="">
              <label for="fname">First Name</label>
              <input type="text" id="fname">

              <label for="lname">Last Name</label>
              <input type="text" id="lname">
              
              <label for="email">Email</label>
              <input type="email" id="email">

              <label for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>

          </form>
      </div>
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
    .information {
        position: relative;
        background-color: #443EAD;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info-form {
        background-color: #6B5ED2;
        padding: 10em; 
        width: 35%;
        border-radius: 2em;
        color: #FCF7FF;

        h2 {
            padding-bottom: 1em;
            font-size: 35px;
        }

        input[type=text], input[type=email], textarea {
            width: 100%;
            padding: 12px 25px;
            margin: 10px 0;
            display: block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
    }
</style>