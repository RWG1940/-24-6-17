import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/router'
import App from './App.vue'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App)
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
app.use(router)
app.use(createPinia())
app.mount('#app')
