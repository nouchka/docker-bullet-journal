import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons";

Vue.component("v-icon", Icon);

router.beforeEach((to, from, next) => {
   // store.dispatch("isLoggedIn");
   console.log(store.getters.getLoggedIn);
   if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!store.getters.getLoggedIn) {
         next({
            path: "/",
         });
      } else {
         next();
      }
   } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (store.getters.getLoggedIn) {
         next({
            path: "/user",
         });
      } else {
         next();
      }
   }
});

new Vue({
   store,
   router,
   render: (h) => h(App),
}).$mount("#app");
