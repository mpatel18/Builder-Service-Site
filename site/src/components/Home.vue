<template>
    <div>
        <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#Home">Build.net</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#Review">{{ $t('review_tag') }}</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item @click="changeLocale('en')">EN</b-dropdown-item>
                        <b-dropdown-item @click="changeLocale('es')">ES</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
        <div>
            <b-jumbotron header="Build.net">
            <template #lead>{{ $t('descrip') }}</template>
                <hr class="my-4">
                <p>{{ $t('tag') }}</p>
            </b-jumbotron>
        </div>
        <h2 class="service_header">{{ $t('s_title') }}</h2>
        <h2 id ="Review" class ="review-header">{{ $t('review_tag') }}</h2>
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