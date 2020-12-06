<template>
    <div>
        <div class="service">
            <h2 class="service_header" style="color: white;">{{ $t('s_title') }}</h2>
        </div>
        <div class="review">
            <h2 id ="Review" class ="review-header" style="color: white;">{{ $t('review_tag') }}</h2>
        </div>
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
</style>