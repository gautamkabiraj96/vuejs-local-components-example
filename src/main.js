import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const ComponentFoo = { name: "Foo", template: `<div>Foo component</div>` };
const ComponentBar = { name: "Bar", template: `<div>Bar component</div>` };
const ComponentBaz = { name: "Baz", template: `<div>Baz component</div>` };

new Vue({
  render: (h) => h(App),
  components: {
    "component-foo": ComponentFoo,
    "component-bar": ComponentBar,
    "component-baz": ComponentBaz
  }
}).$mount("#app");
