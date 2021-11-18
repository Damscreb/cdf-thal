<template>
    <div>
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <div class="description">
            <h2 class="font-title">COUPE DE FRANCE AoE2</h2>
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
                <h2>LES JOUEURS</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
    h2, p {
      color: var(--color-text);
    }

    h2 {
      margin-bottom: 1em;
      text-decoration: underline;
    }

    p {
      margin-bottom: 0.7em;
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
        width: 80%;
    }
</style>
