<template>
    <div class="joueur">
        <img :src="avatar" />
        <div class="name">
            <h4 class="font-text">
                {{ name }}
            </h4>
        </div>
    </div>
</template>
<script>
export default {
    'props': {
        'avatar': {
            'default': '~/assets/image/Affiche_CDF.png',
            'type': String
        },
        'name': {
            'default': 'Joueur',
            'type': String
        }
    }
}
</script>
<style scoped lang="scss">
    .joueur {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 250px;
        background-color: var(--color-black);
        border-radius: 25px;
        overflow: hidden;
        margin: 1em;
            transition: 0.2s ease-in-out;
        & img {
            border-radius: 25px;
            width: 100%;
            height: 80%;
        }
        & .name {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 20%;
            & h4 {
                color: var(--color-text);
            }
        }
        &:hover {
            transform: scale(1.1);
            transition: 0.2s ease-in-out;
        }
    }
</style>
