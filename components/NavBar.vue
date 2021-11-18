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
    }

    h3 {
        margin: 1em;
        color: var(--color-text);
        &:hover {
            cursor: pointer;
            color: var(--color-text-highlight);
        }
    }
</style>
