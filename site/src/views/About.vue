<template>
    <div class="about">
        <img src="@/assets/Stock.png" alt="stock">
        <div class="about-container">
            <div class="body">
                <h1>An About Tag</h1>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nam iaculis velit sed diam interdum pulvinar. 
                </p>
            </div>
            <!-- <div class="glassmorphism">
                <div class="glass1">
                    <h2>We Care</h2>
                    <p>
                        Curabitur ac vehicula est, non fermentum risus. In accumsan leo vel 
                        tellus mollis luctus. Aliquam erat volutpat. Sed id augue euismod, 
                        pellentesque justo vel, varius lectus. 
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
            </div> -->
        </div>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: 'About',
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
}
</script>

<style scoped lang="scss">

    .about { 
        height: 100vh;
        background-color: #FCF7FF;
        display: flex;
    }

    img {
        filter: grayscale(100%);
    }

    .about-container { 
        position: relative;
        z-index: 2;
    }

    .body { 
        text-align: right;
        padding: 23.4375em 12.5em 0em 1em; 

        h1 { 
            font-size: 6em;
            color: #443EAD;
        }

        p { 
            font-size: 35px;
            padding-top: 1.5em; 
            padding-left: 2em;
        }
    }

</style>