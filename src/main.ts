// @ts-ignore
import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'

// @ts-ignore
import router from '@/router'

const app = createApp(App);

app.use(router);
app.mount('#app')
