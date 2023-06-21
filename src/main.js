import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from './router'


let app = createApp(App);

app.use(router);
app.mount('#app')
