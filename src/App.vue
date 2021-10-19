<template>
  <div id="app">
    <navbar />
    <router-view />
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
 * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
}

html {
    --primary: #2E948A;
    --overlay: #FFFFFF;
    --menu: #FDFDFD;
    --secondary: #FF4081;
    --subtitle: #555555;
    --class: #419488;
    --background: #E5E5E5;
    --text: #000000;
    --table-header: #EBEBEB;
    --table-border: #989898;
    --table-background: #FFFFFF;
    --danger: #F8513A;
    --warning: #F8C23A;
    --hr: #C4C4C4;
    --input-text: #404040;
    --input-border: #AEAEAE;
    --input-background: #FFFFFF;
    --section-form: #419488;

    /* Para facilitar o dimensionamento dos elementos */
    /* User agent : 1rem = 16px -> 62.5% = 10px */
    font-size: 62.5%;

    font-family: 'Ubuntu', sans-serif;
}

body{
    background-color: var(--background);
    color: var(--text);
    font-size: 2rem;
}
</style>