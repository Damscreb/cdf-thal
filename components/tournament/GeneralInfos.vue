<template>
    <div class="infos-container">
        <input id="infos" type="checkbox">
        <label for="infos">
            <h2>INFORMATIONS GÉNÉRALES</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="text text-infos">
            <div class='img-text'>
                <img src='~/assets/image/Logo_CDF.png' alt="Logo du tournoi" />
                <p>La Coupe de France AoE II est un <span>tournoi RM 1V1</span> qui se tient du 15 novembre au 19 décembre et dont l’objectif est de déterminer le meilleur joueur francophone de l’année 2021.</p>
            </div>
            <p>Si la majorité des événements compétitifs d’AoE  2 se présente sous un format opposant des joueurs d’un niveau très proche, ce format de coupe permettra d’<span>inclure un grand nombre de joueurs de niveaux disparates</span>.  A ce titre, seuls les joueurs ayant la meilleure préparation et la plus grande constance parviendront à aller loin dans la compétition et ce que ces derniers soient considérés comme outsiders ou comme favoris.</p>
            <p>La Coupe de France AoE II compte 128 places et si l’inscription est <span>ouverte à tous les elos</span>, seuls les 128 joueurs ayant l’elo max RM le plus élevé pourront participer.</p>
            <p>Le tournoi se décompose en <span>deux phases principales</span> :</p>
            <p class="indentation">La première se tiendra sur 2 tours et se jouera exclusivement en Bo1.  A l’exception des 8 joueurs ayant l’elo RM le plus élevé à l’inscription, les rencontres seront tirées au sort avant le premier tour.</p>
            <p class="indentation">La seconde débutera au troisième tour (16ème de finale) et se jouera en Bo3, Bo5 et Bo7 en fonction du niveau d’avancement de la compétition. Tous les joueurs seront alors placés en fonction de leur elo RM maximal. Il est à noter que les <span>32 joueurs qui atteindront ce stade de la compétition</span> recevront du CP.</p>
            <p>Nous avons donc fait le choix de proposer à la communauté un tournoi exigeant, dont la victoire est loin d’être acquise pour les favoris et que nous avons souhaité aussi plaisant à jouer qu’à suivre en tant que spectateur.</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    input[type="checkbox"] {
        display: none;
        & ~ .text {
            height: 0px;
            overflow: hidden;
            transition: .3s linear;
            line-height: 130%;
        }
        &:checked ~ .text {
            padding: 0.75em 0.75em 2em 0;
            transition: .3s linear;
            position: relative;
            overflow-y: scroll;
            &-infos{
                height: 400px;
            }
            & p:last-child {
                position: relative;
            }
            & > p:last-child::after {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--color-text-highlight);
                position: absolute;
                left: 0;
                bottom: -25px;
                border-radius: 1px;
            }
        }
    }

    .img-text {
        display: flex;
        align-items: center;
        & img {
            width: 70px;
            height: 70px;
            float: left;
        }
    }

    .text {
        height: 0px;
        display: flex;
        flex-direction: column;
        letter-spacing: 0.5px;
        text-align: justify;
        & p {
            &:not(:last-child) {
                margin-bottom: .5em;
            }
        }
        & span, a {
            color: var(--color-text-highlight)
        }
        & .indentation {
            margin-left: 2em;
        }
        & a:hover {
            text-decoration: underline;
        }
    }
</style>
