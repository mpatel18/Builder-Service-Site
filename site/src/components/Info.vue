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

<style lang="scss" scoped>
    .info {
        display: flex;
        justify-content: space-evenly;

        .service {
            color: white;
            border: 10px solid white; 
            border-radius: 1em;
            text-align: center;
        }
    }
</style>