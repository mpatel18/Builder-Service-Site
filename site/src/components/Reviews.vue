<template>
    <div>
        <b-card>
            <b-media>
            <template v-slot:aside>
                <b-img blank blank-color="#000" width="64" alt="placeholder"></b-img>
            </template>
            <div class ="review-caption"> 
                <h5 class="mt-0">{{ reviews.name }}</h5>
                <p>
                    {{ reviews.review }}
                </p>
                <p>
                    {{ reviews.stars  }} / 5
                </p>
            </div>
            </b-media>
        </b-card>
    </div>
</template>

<style>
    .review-caption {
        margin-right: 10%;
    }
</style>

<script>
export default {
    name: 'reviews',
    props:['reviews']
}
</script>