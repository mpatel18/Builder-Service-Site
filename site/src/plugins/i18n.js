import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {'en': {review_tag: 'Reviews', 
                         descrip: 'Your one template to design, build, and customize your service of tomorrow, today.',
                         tag: 'Designed to get you up and running.',
                         s_title: 'What We Offer', 
                         Consulting: 'Consulting',
                         Management: 'Management',
                         Testing: 'Testing',
                         C_Descrip: 'The business of giving expert advice to other professionals, typically in financial and business matters.',
                         M_Descrip: 'Management is the coordination and administration of tasks to achieve a goal.',
                         T_Descrip: 'Take measures to check the quality, performance, or reliability of (something), especially before putting it into widespread use or practice.',
                         UserName: 'UserName:',
                         Review: 'Review:',
                         Rating: 'Rating:'
                        },
                  'es': {review_tag: 'Críticas', 
                         descrip: 'Su única plantilla para diseñar, construir y personalizar su servicio del mañana, hoy.',
                         tag: 'Diseñado para ponerte en marcha.',
                         s_title: 'Lo que ofrecemos',
                         Consulting: 'Consultante',
                         Management: 'Administración',
                         Testing: 'Pruebas',
                         C_Descrip: 'El negocio de brindar asesoramiento experto a otros profesionales, generalmente en asuntos financieros y comerciales.',
                         M_Descrip: 'La gestión es la coordinación y administración de tareas para lograr un objetivo.',
                         T_Descrip: 'Tome medidas para comprobar la calidad, el rendimiento o la fiabilidad de (algo), especialmente antes de ponerlo en práctica o utilizarlo de forma generalizada.',
                         UserName: 'Nombre de usuario:',
                         Review: 'Revisión:',
                         Rating: 'Clasificación:'
                        }};
export default new VueI18n({locale: 'en', // set locale 
                          fallbackLocale: 'es', // set fallback 
                          messages // set locale messages
                        });

        