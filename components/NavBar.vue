<template>
    <header>
        <h3 class="font-text">Accueil</h3>
        <h3 class="font-text">Tournoi</h3>
        <h3 class="font-text">Thalounette</h3>
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
        margin: 1em;
        color: var(--color-text);
        transition: 0.2s ease-in-out;
        &:hover {
            cursor: pointer;
            color: var(--color-text-highlight);
            transition: 0.2s ease-in-out;
        }
    }
</style>
