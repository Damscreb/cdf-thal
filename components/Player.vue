<template>
    <div class="joueur">
        <img :src="avatar" />
        <div class="name">
            <h4>
                {{ name }}
            </h4>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        avatar: {
            default: '~/assets/image/Affiche_CDF.png',
            type: String,
        },
        name: {
            default: 'Joueur',
            type: String,
        },
    },
}
</script>
<style scoped lang="scss">
    .joueur {
        display: flex;
        flex-direction: column;
        width: 150px;
        height: 190px;
        background-color: var(--color-black);
        border-radius: 20px;
        overflow: hidden;
        margin: 0.5em;
        transition: 0.2s ease-in-out;
        & img {
            border-radius: inherit;
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
                padding: 0 1em;
                text-align: center;
            }
        }
        &:hover {
            background-color: var(--color-text-highlight);
        }
    }

    @media all and (max-width: 500px){
        .joueur {
            width: 105px;
            height: 140px;
            margin: 0.5em 0.3em;
            border-radius: 12px;
            & .name {
                height: 23%;
                & h4 {
                    width: inherit;
                    font-size: 0.8em;
                    padding: 0.1em 0;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>
