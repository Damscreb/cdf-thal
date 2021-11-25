<template>
    <div>
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <div class="description">
            <h2 class="font-title">UNE COUPE DE FRANCE AoE2</h2>
            <p class="font-text">
                La <span>Coupe de France AoE II</span> est un tournoi sur des cartes aléatoires en 1V1organisé par <span>Thalounette</span>.
            </p>
            <p class="font-text">
                L’objectif est de déterminer le <span>meilleur joueur francophone</span> de l’année 2021! Ce tournoi compte 128 places, cependant, seuls les joueurs ayant le niveau le plus élevé parmis les inscrits pourront participer.
                Il se tient du 15 novembre au 19 décembre.
            </p>
        </div>
        <div class="description">
            <div class="font-title">
                <h2>DES JOUEURS</h2>
            </div>
        </div>
        <div class="players-display">
            <Player v-for="joueur in joueurs" :key="joueur.name" :name="joueur.name" :avatar="joueur.avatar" />
        </div>
    </div>
</template>
<script>
import Player from '~/components/Player.vue'
export default {
    'components': {Player},
    data () {
        return {
            'joueurs': [
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2021/11/15/05/52/red-fox-6796430_960_720.jpg',
                    'name': 'Elunnor'
                },
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2021/11/18/22/17/butterfly-6807529_960_720.jpg',
                    'name': 'Thalounette'
                },
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_960_720.png',
                    'name': 'Elhyar'
                },
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2020/06/10/02/22/caricature-5280770_960_720.jpg',
                    'name': 'Melo'
                },
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2021/08/26/15/39/cat-6576397_960_720.jpg',
                    'name': 'Aramatu'
                },
                {
                    'avatar': 'https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-21.png',
                    'name': 'Sus'
                },
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2018/11/19/05/53/animal-3824672_960_720.jpg',
                    'name': 'MisterLu'
                },
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2020/07/10/19/07/she-5391770_960_720.jpg',
                    'name': 'Clem'
                },
                {
                    'avatar': 'https://cdn.pixabay.com/photo/2021/11/15/21/39/rose-6799477_960_720.jpg',
                    'name': 'Une jolie Rose Blanche'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    h2, p {
        color: var(--color-text);
    }

    h2 {
        margin-bottom: 1em;
        text-decoration: underline;
        font-size: 1.6em;
        letter-spacing: 1px;
    }

    p {
        margin-bottom: 0.7em;
        font-size: 1.1em;
    }

    img {
        width: 100%;
        border-radius: 15px;
        margin-bottom: 2em;
    }

    span {
        color: var(--color-text-highlight);
        &:hover {
            cursor: inherit;
            text-decoration: underline;
        }
    }

    .description {
        display:flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 1em;
        margin-inline: auto;
        width: 85%;
    }

    .players-display {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 2.5em;
    }
</style>
