/* eslint-disable import/first */
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import boot from './modules/boot'
/* eslint-enable import/first */

window.WIKI = null
window.boot = boot

Vue.use(Vuetify)

Vue.component('Setup', () => import(/* webpackMode: "eager" */ './components/setup.vue'))

let bootstrap = () => {
  window.WIKI = new Vue({
    el: '#root',
    vuetify: new Vuetify({
      theme: {
        themes: {
          light: {
            primary: '#38B000',
            secondary: '#b0bec5',
            anchor: '#8c9eff'
          }

        }
      }
    })
  })
}

window.boot.onDOMReady(bootstrap)
