import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons";

Vue.component("v-icon", Icon);

new Vue({
   store,
   render: (h) => h(App),
}).$mount("#app");
