import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCodemirror from "vue-codemirror";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

// Css
import "@/assets/css/normalize.css";
import "@/assets/css/global.scss";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-mirage.css";

// Codemirror
Vue.use(VueCodemirror, {
  options: {
    tabSize: 4,
    mode: "text/x-vue",
    lineWrapping: true,
    theme: "ayu-mirage",
    lineNumbers: true,
    readOnly: true,
    line: true,
  },
});

// Google analytics
Vue.use(VueGtag, {
  config: { id: "G-3PVBT6QW2V" }
}, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
