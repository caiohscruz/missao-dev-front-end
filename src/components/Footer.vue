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