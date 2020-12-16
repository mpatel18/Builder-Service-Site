<template>
    <div class="about">
        <img src="@/assets/Stock.png" alt="stock">
        <div class="about-container">
            <div class="glass1">
                <h2>We Care</h2>
                <p>
                    Curabitur ac vehicula est, non fermentum risus. In accumsan leo vel 
                    tellus mollis luctus. Aliquam erat volutpat. Sed id augue euismod, 
                    pellentesque justo vel, varius lectus. 
                </p>
            </div>
            <div class="body">
                <h1>An About Tag</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nam iaculis velit sed diam interdum pulvinar. 
                </p>
            </div>
            <div class="glass2">
                <h2>We Listen</h2>
                <p>
                    Curabitur ac vehicula est, non fermentum risus. In accumsan leo vel 
                    tellus mollis luctus. Aliquam erat volutpat. Sed id augue euismod, 
                    pellentesque justo vel, varius lectus. 
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: 'Description',
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
};
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

    img {
        position: absolute; 
        top: 0; 
        left: 0;
        // filter: grayscale(100%);
        height: 100vh;
        z-index: 1;
    }

    .about { 
        height: 100vh;
    }

    .about-container { 
        padding: 6em 12.5em 0em 15em;
        position: relative;
        z-index: 2;
    }

    .body { 
        text-align: right;
        padding-top: 2em;
        padding-bottom: 2em;

        h1 { 
            font-size: 6em;
            color: #443EAD;
            font-family: 'Roboto', sans-serif;
        }

        p { 
            font-size: 35px;
            padding-top: 1.5em; 
            padding-left: 12.5em;
            font-family: 'Roboto', sans-serif;
        }
    }

    .glass1, .glass2 { 
        display: inline-block; 
        background: rgba(235, 235, 235, 0.2); 
        padding: 4em; 
        border-radius: 1.5em;
        position: relative;
        backdrop-filter: blur(10px);
        border: solid 3px transparent; 
        background-clip: padding-box;
        width: 30%; 
        box-shadow: 10px 10x 10px 10px rgba(78, 49, 49, 0.02); 

        h2 {
            font-size: 30px;
            padding-bottom: 10px; 
            font-family: 'Roboto', sans-serif;
        }

        p { 
            font-size: 17px;
            line-height: 20px;
            font-family: 'Roboto', sans-serif;
        }
    }
</style>