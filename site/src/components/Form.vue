<template>
  <div class="information">
      <div class="info-form">
          <h2>{{ title }}</h2>
          <form action="">
              <label for="fname">First Name</label>
              <input type="text" id="fname">

              <label for="lname">Last Name</label>
              <input type="text" id="lname">
              
              <label for="email">Email</label>
              <input type="email" id="email">

              <label for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>

              <button type="submit">Submit</button>
          </form>
      </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: "Form",
    props: {
        title: String
    }, 
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
}; 
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

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
        line-height: 2em;

        h2 {
            padding-bottom: 1em;
            font-size: 35px;
            font-family: 'Roboto', sans-serif;
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
</style>