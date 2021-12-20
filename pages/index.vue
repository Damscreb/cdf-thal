<template>
    <div class="main">
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <div class="description">
            <h2>UNE COUPE DE FRANCE AoE2</h2>
            <p>
                La <span>Coupe de France AoE II</span> est un tournoi sur des cartes aléatoires en 1V1 organisé par <span>Thalounette</span>.
            </p>
            <p>
                L’objectif est de déterminer le <span>meilleur joueur francophone</span> de l’année 2021! Ce tournoi compte 128 places, cependant, seuls les joueurs ayant le niveau le plus élevé parmi les inscrits pourront participer.
                Il se tient du 15 novembre au 19 décembre.
            </p>
        </div>
        <div class="description-resume">
            <h2>LE RÉSUMÉ DU TOURNOI</h2>
            <h3>Bonjour à tous,</h3>
            <p>La Coupe de France AoE II s’est achevée en grande pompe hier soir (19/12/2021) et c’est au cours d’un BO7 de haute volée<span> que Sitaux a renforcé son statut de meilleur joueur francophone</span> en s’imposant 4-2 face à Babaorum et en remportant ainsi <span>les 765 € promis au vainqueur</span> et confirme donc son très bon état de forme qui lui a permis d’atteindre les quarts de finales au KOTD 4, <span>toutes nos félicitations à lui!</span></p>
            <p>D’un point de vue plus général, nous sommes également ravis que cette compétition ait permis à certains joueurs de s’illustrer et de montrer l’étendue de leur talent.  Cela a notamment été le cas de <span>Nyodra</span> qui est parvenu à atteindre les quarts de finales au terme d’un parcours très difficile en ayant battu respectivement Smeagoul, Boosted John, Leonidas et Lighty.  Autre performance notable avec <span>c.salette qui confirme</span> sa progression en ayant réussi à atteindre les quarts de finales pour finalement s’incliner 2-3 face à Cl3m3nt. Nous pouvons donc également <span>les féliciter pour leurs performances respectives</span>.
            <p>Sur les 128 joueurs inscrits, il n’en restait finalement plus que 4 à savoir <span>Sitaux, Babaorum, Cl3m3nt et Margougou</span>. La première demi-finale a vu s’affronter <span>Sitaux et Cl3m3nt</span> et malgré un score de 3-0 en faveur de Sitaux, Cl3m3nt n’a pas démérité en passant notamment tout près de la victoire sur African River. Dans la seconde demi-finale, <span>Babaorum l’a emporté 3-2 face à un Margougou très en forme</span>.</p>
            <p>Pour conclure cette compétition, nous avons donc eu droit à une <span>petite finale entre Cl3m3nt et Margougou</span>, remportée par Cl3m3nt sur le score sans appel de 3-0 mais surtout à une <span>grande finale entre Sitaux et Babaorum</span>.</p>
            <p>Si Babaorum a marqué d’emblée le premier point en l’emportant sur Arabie, Sitaux a rebondi immédiatement en gagnant sur African River et Atacama.  Pour autant, Babaorum a réussi à égaliser sur Arène confirmant une fois encore tout son talent sur cette map.  C’est alors qu’après la nouvelle victoire de Sitaux sur Starfighter, le point gagnant s’est joué sur Frozen River, <span>une map totalement inédite découverte en direct</span> par les joueurs et le public.</p>
            <p>Outre la performance des joueurs, cette compétition a également permis de <span>révéler tout le talent d’un autre membre de notre communauté</span>...  Les joueurs ayant en effet eu l’occasion de s’affronter sur Frigid Lake, Starfighter, African River et Frozen River toutes <span>créées par Miaou</span>. Les deux dernières ont été créées spécialement pour la compétition, nous espérons les voir rapidement dans de nouveaux tournois français ou internationaux!  En attendant, si vous souhaitez découvrir <span>Frozen River</span>, nous vous invitons à télécharger le mod (sobrement nommé) : <span>AusitinLeBG</span>.</p>
            <p>Enfin, il convient évidemment de <span>remercier tous les spectateurs</span> qui ont suivi cette Coupe de France.  Ce tournoi a été fait pour vous et le fait de voir que <span>vous avez été près de 350 à regarder cette grande finale en direct</span> avec nous est <span>la plus belle des réussites</span>.</p>
            <p>Suite à un tel succès, <span>la Coupe de France reviendra</span> avec un format revu et corrigé pour le plus grand plaisir des joueurs et des spectateurs!</p>
            <h3>A très bientôt!</h3>
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
        // Get only 14 random players
        this.somePlayers = this.allPlayers.
            sort(() => 0.5 - Math.random()).
            slice(0, 14).
            sort((playerA, playerB) => playerA.name.localeCompare(playerB.name))
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

    h3 {
        margin-bottom: 0.5em;
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
            text-decoration: none;
        }
    }

    .description {
        display:flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 1em;
        margin-inline: auto;
        width: 85%;
        &-resume {
            & h2 {
                text-align: center;
            }
            & p {
                text-align: justify;
            }
        }
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

        img {
            width: 100%;
            object-fit: cover;
            object-position: 50% 20%;
            border-radius: 15px;
            margin-bottom: 2em;
        }

        .description-resume {
            padding: 0 1em;
        }
    }
</style>
