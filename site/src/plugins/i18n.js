import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {'en': {review_tag: 'Reviews', 
                         s_title: 'What We Offer', 
                        },
                  'es': {review_tag: 'Críticas', 
                         s_title: 'Lo que ofrecemos',
                        }};
                        
export default new VueI18n({locale: 'en', // set locale 
                          fallbackLocale: 'es', // set fallback 
                          messages // set locale messages
                        });

        