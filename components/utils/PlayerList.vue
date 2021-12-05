<template>
    <div class="player-container">
        <div v-for="joueur in joueurs" :key="joueur.name" class="joueur">
            <img :src="joueur.avatar" />
            <div class="name">
                <h4>
                    {{ joueur.name }}
                </h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            joueurs: [
                {
                    avatar: 'https://cdn.pixabay.com/photo/2021/11/15/05/52/red-fox-6796430_960_720.jpg',
                    name: 'Elunnor',
                },
                {
                    avatar: 'https://cdn.pixabay.com/photo/2021/11/18/22/17/butterfly-6807529_960_720.jpg',
                    name: 'Thalounette',
                },
                {
                    avatar: 'https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_960_720.png',
                    name: 'Elhyar',
                },
                {
                    avatar: 'https://cdn.pixabay.com/photo/2020/06/10/02/22/caricature-5280770_960_720.jpg',
                    name: 'Melo',
                },
                {
                    avatar: 'https://cdn.pixabay.com/photo/2021/08/26/15/39/cat-6576397_960_720.jpg',
                    name: 'Aramatu',
                },
                {
                    avatar: 'https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-21.png',
                    name: 'Sus',
                },
                {
                    avatar: 'https://cdn.pixabay.com/photo/2018/11/19/05/53/animal-3824672_960_720.jpg',
                    name: 'MisterLu',
                },
                {
                    avatar: 'https://cdn.pixabay.com/photo/2020/07/10/19/07/she-5391770_960_720.jpg',
                    name: 'Clem',
                },
                {
                    avatar: 'https://cdn.pixabay.com/photo/2021/11/15/21/39/rose-6799477_960_720.jpg',
                    name: 'Une jolie Rose Blanche',
                },
            ],
        }
    },
}
</script>
<style scoped lang="scss">
    .player-container {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #151615;
        border-radius: 15px;
        padding: 0.5em;
    }

    .joueur {
        display: flex;
        flex-direction: column;
        width: 160px;
        height: 200px;
        background-color: var(--color-black);
        border-radius: 25px;
        overflow: hidden;
        margin: 1em 0.5em;
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
                padding: 0 1em;
                text-align: center;
            }
        }
        &:hover {
            transform: scale(1.1);
            transition: 0.2s ease-in-out;
        }
    }
</style>
