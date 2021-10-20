<template>
  <div id="app">
    <navbar />
      <router-view class="content" />
    <footeer />
  </div>
</template>

<script>
  import navbar from "./components/NavBar.vue";
  import footeer from "./components/Footer.vue";

  export default {
    name: "App",
    components: {
      navbar,
      footeer,
    }
  }
</script>

<style>

</style>