import { createApp } from 'vue'
import './style.css'
import {createPinia} from "pinia";
import App from './App.vue'
import router from "../router/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(ElementPlus)
    .use(createPinia())
    .use(router)
    .mount('#app')
