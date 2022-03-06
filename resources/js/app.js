/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 import Vue from "vue";
 import VueRouter from "vue-router";
 import RouterPrefetch from 'vue-router-prefetch';
 import { BootstrapVue, IconsPlugin, ModalPlugin, BVToastPlugin } from 'bootstrap-vue'
 import App from "./template/App";
 import router from "./routes";
 import store from './stores/store';

 // general styling
 import './assets/sass/app.scss';


 Vue.use(BootstrapVue)
 // BootstrapVue plugins
 Vue.use(IconsPlugin)
 Vue.use(ModalPlugin)
 Vue.use(BVToastPlugin)
 Vue.use(VueRouter);
 Vue.use(RouterPrefetch);

 axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {

          originalRequest._retry = true;
          store.dispatch('LogOut')
          return router.push('/login')
      }
    }
  })

 new Vue({
     router,
     store,
     render: h => h(App),
 }).$mount("#app");
