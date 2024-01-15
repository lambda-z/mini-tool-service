// @ts-ignore
import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import ElementPlus from 'element-plus'  //引入element-plus库
import 'element-plus/theme-chalk/index.css'
// @ts-ignore
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// @ts-ignore
import router from '@/router'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import './assets/main.css'
// @ts-ignore
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
// @ts-ignore
import { ThemeServiceInit, infinityTheme } from 'devui-theme';


const app = createApp(App);

ThemeServiceInit({ infinityTheme }, 'infinityTheme');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(DevUI);
app.use(router);
app.mount('#app')
