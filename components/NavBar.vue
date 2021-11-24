<template>
    <header>
        <Nuxt-Link exact-active-class="underline" to=""><h3 class="font-text">Accueil</h3></Nuxt-Link>
        <Nuxt-Link exact-active-class="underline" to="/tournoi"><h3 class="font-text">Tournoi</h3></Nuxt-Link>
        <Nuxt-Link exact-active-class="underline" to="/thalounette"><h3 class="font-text">Thalounette</h3></Nuxt-Link>
    </header>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
    header {
        background-color: var(--color-black);
        width: 100%;
        display: flex;
        flex-direction: row;
        border-radius: 15px;
        margin-bottom: 1.5em;
        padding: 0 0.5em;
    }

    h3 {
        position: relative;
        margin: 1em;
        color: var(--color-text);
        transition: 0.2s ease-in-out;
        &:hover {
            cursor: pointer;
            color: var(--color-text-highlight);
            transition: 0.2s ease-in-out;
        }
    }

    a {
        text-decoration: none;
    }

    .underline h3{
        &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: var(--color-text-highlight);
        position: absolute;
        bottom: -3px;
        left: 0px;
        transition: 0.2s ease-in-out;
        }
        &:hover::after {
            background-color: var(--color-text);
            transition: 0.2s ease-in-out;
        }
    }
</style>
