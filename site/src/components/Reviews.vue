<template>
    <div>
        <b-card>
            <b-media>
            <template v-slot:aside>
                <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
            </template>
            <h5 class="mt-0">{{ reviews.name }}</h5>
            <p>
                {{ reviews.review }}
            </p>
            <p>
                {{ reviews.stars  }} / 5
            </p>
            </b-media>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'reviews',
    props:['reviews']
}
</script>