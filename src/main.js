import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from './router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


let app = createApp(App);

app.use(router);
app.use(PulseLoader);
app.mount('#app')
