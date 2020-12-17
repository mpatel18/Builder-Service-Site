import Vue from 'vue'; 
import VueRouter from 'vue-router'; 
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Service from '../views/Service.vue';
import Contact from '../views/Contact.vue';
import Offer from '../views/Offer.vue';
import Review from '../views/Review.vue'

Vue.use(VueRouter); 

const routes = [ 
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    }, 
    {
        path: "/service",
        name: "Service",
        component: Service
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact
    },
    {
        path: '/offer',
        name: "Offer",
        component: Offer
    },
    {
        path: '/review',
        name: "Review",
        component: Review
    }
]; 

const router = new VueRouter({
    mode: "history", 
    base: process.env.BASE_URL, 
    routes
}); 

export default router; 