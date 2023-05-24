import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import styles from './styles/styles.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')