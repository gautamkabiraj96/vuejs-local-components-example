<template>
  <div id="app">
    <div>Hello</div>
    <component-foo></component-foo>
    <component-bar></component-bar>
    <component-baz></component-baz>
    <div class="np-credits">wwww.nightprogrammer.com</div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 24px;
}

.np-credits {
  font-size: 12px;
  margin-top: 12px;
  color: #4b4b4b;
}
</style>