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