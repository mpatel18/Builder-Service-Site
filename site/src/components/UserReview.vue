<template>
    <div class="user-review">
        <div class="review">
            <p>{{ review }}</p>
            <p>{{ name }}</p>
        </div>
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
    .user-review {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        background: #443EAD;
        color: #FCF7FF; 
        border-radius: 1em;

        .review {
        font-size: 25px; 
        font-style: bold;
        font-family: 'Segoe UI', sans-serif, monospace;
        margin: 0; 
        
            p {
                padding: 1em; 
                text-align: center;
            }
        }
    }
</style>