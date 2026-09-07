// import { createApp } from 'vue'
// import i18n from './i18n'
// import './style.css'

// import App from './App.vue'
// app.use(i18n) // Važno: mora se pozvati pre app.mount('#app')
// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')