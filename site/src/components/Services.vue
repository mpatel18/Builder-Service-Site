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

    .offers {
        flex: 1 1 33.333%;
        padding: 25px; 
    }

    .offers-inner{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px black;
    }
</style>

<script>
export default {
    name: 'offers',
    props:['offers']
}
</script>