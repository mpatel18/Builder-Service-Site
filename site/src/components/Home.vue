<template>
    <div>
        <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#Home">Logo</b-navbar-brand>
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
            <b-jumbotron header="Service">
            <template #lead>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat, cumque sed 
                in aliquid sint. Architecto aperiam illo nostrum exercitationem, eveniet 
                debitis reprehenderit atque quae temporibus quos reiciendis. Nam, optio.
            </template>
                <hr class="my-4">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ducimus nam nemo doloribus.
                </p>
            </b-jumbotron>
        </div>
        <div class="service">
            <h2 class="service_header">{{ $t('s_title') }}</h2>
        </div>
        <div class="review">
            <h2 id ="Review" class ="review-header">{{ $t('review_tag') }}</h2>
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