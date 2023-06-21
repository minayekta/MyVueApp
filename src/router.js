import {createRouter , createWebHistory} from 'vue-router'
import HomePage from './components/Home.vue'
import ContactUsPage  from './components/ContactUsPage.vue'
import AboutUsPage from './components/AboutUsPage.vue'
import Blog from './components/Blog.vue'

const routes =[
    { path: "/", component: HomePage},
    { path: "/about-us", component: AboutUsPage},
    { path: "/contact-us/:id", component: ContactUsPage},
    { path: "/blog", component: Blog},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
