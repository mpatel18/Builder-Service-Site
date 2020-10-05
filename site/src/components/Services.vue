<template>
    <div class ="offers">
        <div class ="offers-inner">
            <div class ="offers-text-wrap">
                <h2 class="bg-text">
                    {{ offers.title }}
                </h2>
            </div>
            <div class="offers-offer-wrap">
                <p>{{ offers.offer }}</p>
            </div>
        </div>
    </div>
</template>

<style>
    .header {
        padding-left: 5%;
        text-decoration: underline;
    }

    .offers-text-wrap, 
    .offers-offers-wrap {
        font-size: 22px;
    }
</style>

<script>
export default {
    name: 'offers',
    props:['offers']
}
</script>