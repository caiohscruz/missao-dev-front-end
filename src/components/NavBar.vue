<template>
    <div class="navbar">
        <img src="../assets/dindin-logo.png" alt="logotipo" class="logo-navbar" />
        <div class="wordmark-navbar">dindin</div>
        <div class="menu">
            <router-link to="/">CURSOS</router-link>
            <router-link to="/admin">PAINEL ADMINISTRATIVO</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "NavBar",

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
.navbar {
    background-color: var(--primary);
    height: 11.7rem;
    color: var(--overlay);
    display: flex;
}

.logo-navbar {
    margin-left: 8.2rem;
    margin-right: 1.1rem;
    margin-top: 2rem;
    margin-bottom: 2.6rem;
    width: 6.9rem;
    height: 7.1rem;
}

.wordmark-navbar {
    font-weight: 500;
    font-size: 5.6rem;
    margin-top: 3.3rem;
    margin-bottom: 2rem;
}

.menu{
    display: flex;
    margin-left: auto;
    align-items: center;
    font-weight: 700;
    font-size: 2rem;
    margin-top: 4.7rem;
    margin-bottom: 4.7rem;
}

.menu a{
    color: var(--menu) inherit;
    margin-left: 4rem;
}

.menu a:nth-child(2){
    margin-right: 4.2rem;
}
</style>