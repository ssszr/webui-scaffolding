import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router';
import {createPinia} from "pinia";
import i18n from "@/i18n/index";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
    .use(pinia)
    .use(i18n)
    .use(ElementPlus)
    .mount('#app')

//#todo something