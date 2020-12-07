<template>
    <div>
        <div class="nav-container">
            <header>
                logo
            </header>
            <nav class="navbar">
            <ul>
                <li>about</li>
                <li>service</li>
                <li>home</li>
            </ul>
        </nav>
        </div>
        <h1>A tagline for your service</h1>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <div>
            <div class="block1"></div>
            <div class="block2"></div>
        </div>
        <!-- <div class="service">
            <h2 class="service_header" style="color: white;">{{ $t('s_title') }}</h2>
        </div>
        <div class="review">
            <h2 id ="Review" class ="review-header" style="color: white;">{{ $t('review_tag') }}</h2>
        </div> -->
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: 'Home',
    methods: {
    changeLocale(locale) {
      i18n.locale = locale; 
    }
  } 
}
</script>

<style>
    * {
        background: #1f1f1f;
    }

    .navbar, header { 
        color: white; 
    }

    .block1 { 
        width: 500px;
        height: 500px; 
        background:rgb(143, 46, 46); 
    }

    .block2 {
        width: 500px;
        height: 500px; 
        background: purple;
    }
</style>