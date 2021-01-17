
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import IconsPlugin from "bootstrap-vue"
import VCalendar from "v-calendar"
import VueMask from "v-mask"

Vue.use(VCalendar, {
  componentPrefix: "vc"
});
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueMask)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");