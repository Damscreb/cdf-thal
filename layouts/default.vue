<template>
    <main>
        <NavBar />
        <Nuxt />
        <Footer />
    </main>
</template>
<script>
import Footer from '~/components/Footer.vue'
import NavBar from '~/components/NavBar.vue'
export default {
    'components': {
        Footer,
        NavBar
    }
}
</script>
<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }

    html, body{
        height: auto;
    }

    body {
        background-color: var(--color-main-background-color);
    }

    .font-title{
        font-family: "Inter Bold";
    }

    .font-text{
        font-family: "Inter";
    }

    .font-text-light {
        font-family: "Inter Light";
    }

    a {
        text-decoration: none;
    }

    input[type="checkbox"] ~ label svg {
        transition: .3s ease-out;
    }

    input[type="checkbox"]:checked ~ label svg {
        transition: .3s ease-in;
        transform: rotate(90deg);
    }
</style>
<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        padding-top: 5em;
        margin: auto;
        max-width: 1200px;
        width: 100%;
        min-height: 91.6vh;
    }

    @media all and (max-width: 500px) {
        main {
            padding-top: 0em;
            min-height: 100vh;
        }
    }
</style>
