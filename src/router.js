import {createRouter , createWebHistory} from 'vue-router'
import HomePage from './components/Home.vue'
import ContactUsPage  from './components/ContactUsPage.vue'
import AboutUsPage from './components/AboutUsPage.vue'

const routes =[
    { path: "/", component: HomePage},
    { path: "/about-us", component: AboutUsPage},
    { path: "/contact-us", component: ContactUsPage},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
