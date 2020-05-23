import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { Drag } from 'vue-drag-drop' // import Drag

Vue.component('drag', Drag) // make it a globally available component

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
