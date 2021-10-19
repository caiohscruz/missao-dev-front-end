<template>
    <div class="footer">
        <img src="../assets/dindin-logo.png" alt="logotipo" />
        <div class="logo-footer">
            dindin
            <div class="subject">educação financeira</div>
        </div>
    </div>
</template>

<script>
    export default {

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
.footer {
    background-color: var(--primary);
    height: 20.7rem;
    color: var(--overlay);
    display: flex;
    align-items: center;
}

.footer img {
    margin-left: 12.8rem;
    margin-right: 1.543rem;
    margin-top: 5.3rem;
    margin-bottom: 5.257rem;
    width: 9.857rem;
    height: 10.143rem;
}

.footer .logo-footer {
    font-weight: 500;
    font-size: 6.6rem;
    margin-top: 5.9rem;
    line-height: 7.583rem;
}

.footer .subject{
    font-weight: 300;
    font-size: 1.9rem;
    margin-left: 0.7rem;
    margin-bottom: 5.6rem;
    line-height: 2.183rem;
}
</style>