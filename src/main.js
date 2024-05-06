import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"

const app = createApp(App).use(Particles, {
    init: async engine => {
      await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      //await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  });

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')
