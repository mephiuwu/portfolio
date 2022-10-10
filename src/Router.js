import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import AboutMe from './views/AboutMe.vue'
import Experience from './views/Experience.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about-me', component: AboutMe},
    {path: '/experience', component: Experience},
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;