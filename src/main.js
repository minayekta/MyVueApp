import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {createRouter , createWebHistory} from 'vue-router'
import HomePage from './components/Home.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
         { path: "/home", component: HomePage}
    ]
})
let app = createApp(App);

app.use(router);
app.mount('#app')
