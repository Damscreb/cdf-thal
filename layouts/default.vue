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
        font-family: "Roboto Bold";
    }

    .font-text{
        font-family: "Roboto";
    }

    .font-text-light {
        font-family: "Roboto Light";
    }
</style>
<style lang="scss" scoped>
    main {
        margin: auto;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        padding: 1.5em 0 0 0;
    }
</style>
