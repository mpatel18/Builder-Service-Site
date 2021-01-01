<template>
    <div class="review">
        <p>{{ review }}</p>
        <p>{{ name }}</p>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: 'UserReview', 
    props: {
        name: String, 
        review: String
    },
    methods: {
      changeLocale(locale) {
        i18n.locale = locale; 
      }
    }
}
</script>

<style scoped lang='scss'>
    .review {
        font-size: 25px; 
        font-style: bold;
        font-family: 'Segoe UI', sans-serif, monospace;
        text-align: center;
        
        p {
            padding: 1em; 
        }
    }
</style>