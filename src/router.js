import {createRouter , createWebHistory} from 'vue-router'
import HomePage from './components/Home.vue'
import ContactUsPage  from './components/ContactUsPage.vue'
import AboutUsPage from './components/AboutUsPage.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'

const routes =[
    { path: "/", component: HomePage, meta:{requireAuth:true}},
    { path: "/about-us", component: AboutUsPage,meta:{requireAuth:true}},
    { path: "/contact-us/", component: ContactUsPage,meta:{requireAuth:true}},
    { path: "/blog", component: Blog,meta:{requireAuth:true}},
    { path: "/blog/:id", component: Blog},
    { path: "/login", component: Login},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
// قبل از وارد شدن به روت ها یه کاری انجام بده
router.beforeEach(function(to, from, next) {
    if(to.meta.requireAuth ){
        return next ({path:'/login'})
        }else next()
})

export default router;
