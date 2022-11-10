import { createApp } from 'vue'
import './style.css'
import '@/style/index.css'
import router from './router'
import App from './App.vue'
// import 'element-plus/es/components/message/style/css'
// import { ElMessage } from 'element-plus' 
createApp(App).use(router).mount('#app')
