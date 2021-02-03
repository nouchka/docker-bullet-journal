import Vue from "vue";
import Router from "vue-router";
import User from "./views/User.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
   routes: [
      { path: "/", name: "login", component: Login },
      {
         path: "/user",
         name: "user",
         component: User,
      },
   ],
});
