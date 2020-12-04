import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {'en': {review_tag: 'Reviews', 
                         descrip: 'Your one template to design, build, and customize your service of tomorrow, today.',
                         tag: 'Designed to get you up and running.',
                         s_title: 'What We Offer', 
                        },
                  'es': {review_tag: 'Críticas', 
                         descrip: 'Su única plantilla para diseñar, construir y personalizar su servicio del mañana, hoy.',
                         tag: 'Diseñado para ponerte en marcha.',
                         s_title: 'Lo que ofrecemos',
                        }};
                        
export default new VueI18n({locale: 'en', // set locale 
                          fallbackLocale: 'es', // set fallback 
                          messages // set locale messages
                        });

        