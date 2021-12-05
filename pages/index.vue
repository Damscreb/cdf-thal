<template>
    <div class="main">
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <div class="description">
            <h2>UNE COUPE DE FRANCE AoE2</h2>
            <p>
                La <span>Coupe de France AoE II</span> est un tournoi sur des cartes aléatoires en 1V1organisé par <span>Thalounette</span>.
            </p>
            <p>
                L’objectif est de déterminer le <span>meilleur joueur francophone</span> de l’année 2021! Ce tournoi compte 128 places, cependant, seuls les joueurs ayant le niveau le plus élevé parmis les inscrits pourront participer.
                Il se tient du 15 novembre au 19 décembre.
            </p>
        </div>
        <div class="description">
            <div>
                <h2>DES JOUEURS</h2>
            </div>
        </div>
        <div class="players-display">
            <Player v-for="player in somePlayers" :key="player.name" :name="player.name" :avatar="player.avatar" />
        </div>
    </div>
</template>
<script>
import Player from '~/components/Player.vue'
export default {
    components: {Player},
    data() {
        return {
            allPlayers: null,
            somePlayers: null,
        }
    },
    mounted() {
        this.allPlayers = this.$getPlayerData();
        this.somePlayers = this.allPlayers.sort(() => 0.5 - Math.random()).slice(0, 14)
    },
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
        justify-content: space-around;
        width: 100%;
        height: 420px;
        overflow-y: hidden;
        scrollbar-color: var(--color-text-highlight) var(--color-main-background-color);
        margin-bottom: 2.5em;
    }

    @media all and (max-width: 500px){
        .players-display {
            overflow-y: scroll;
            border-top: 2px var(--color-text-highlight) solid;
            border-bottom: 2px var(--color-text-highlight) solid;
            height: 500px;
        }
    }
</style>
