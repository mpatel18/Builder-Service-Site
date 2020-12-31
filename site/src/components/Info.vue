<template>
    <div class="info">
        <div class="service">
            <h3>Service</h3>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing 
                elit. Nam tincidunt urna arcu, 
                eget dapibus mauris accumsan non. 
                Integer lobortis nisi malesuada mauris 
                posuere pharetra. Proin et quam interdum, 
                cursus odio eu, pharetra elit.
            </p>
        </div>
        <div class="service">
            <h3>Service</h3>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing 
                elit. Nam tincidunt urna arcu, 
                eget dapibus mauris accumsan non. 
                Integer lobortis nisi malesuada mauris 
                posuere pharetra. Proin et quam interdum, 
                cursus odio eu, pharetra elit.
            </p>
        </div>
        <div class="service">
            <h3>Service</h3>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing 
                elit. Nam tincidunt urna arcu, 
                eget dapibus mauris accumsan non. 
                Integer lobortis nisi malesuada mauris 
                posuere pharetra. Proin et quam interdum, 
                cursus odio eu, pharetra elit.
            </p>
        </div>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: 'Info', 
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
}
</script>

<style lang="scss">
    .info {
        display: flex;
        justify-content: space-evenly;
        position: relative;
        z-index: 1;
        padding-top: 15em; 
        padding-left: 1em;
        padding-right: 1em;

        .service {
            color: white;
            border: 10px solid white; 
            border-radius: 1em;
            text-align: center;
            padding: 7em; 
            margin: 1em;
            font-family: 'Segoe UI', sans-serif, monospace;

            h3 { 
                font-size: 30px; 
                padding-bottom: 2em;
            }

            p { 
                font-size: 20px;
                line-height: 1.5em;
            }
        }
    }
</style>