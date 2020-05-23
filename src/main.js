import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { Drag, Drop } from 'vue-drag-drop' // import Drag and Drop

Vue.component('drag', Drag)
Vue.component('drop', Drop)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
