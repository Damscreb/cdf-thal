<template>
    <div>
        <h1 class="font-title">TOUTES LES INFORMATIONS PAR RAPPORT AU TOURNOI</h1>
        <div class="dropdown-menu">
            <div class="informations">
                <input id="infos" type="checkbox" v-model="infosCheck">
                <label for="infos">
                    <h2 class="font-title">INFORMATIONS GÉNÉRALES</h2>
                    <Font-awesome-icon v-if="infosCheck" class="icon-format" :icon="['fas', 'chevron-up']" />
                    <Font-awesome-icon v-else class="icon-format" :icon="['fas', 'chevron-down']" />
                </label>
                <div class="font-text-light text text-infos">
                    <p>La Coupe de France AoE II est un <span>tournoi RM 1V1</span> qui se tient du 15 novembre au 19 décembre et dont l’objectif est de déterminer le meilleur joueur francophone de l’année 2021.</p>
                    <p>Si la majorité des événements compétitifs d’AoE  2 se présente sous un format opposant des joueurs d’un niveau très proche, ce format de coupe permettra d’<span>inclure un grand nombre de joueurs de niveaux disparates</span>.  A ce titre, seuls les joueurs ayant la meilleure préparation et la plus grande constance parviendront à aller loin dans la compétition et ce que ces derniers soient considérés comme outsiders ou comme favoris.</p>
                    <p>La Coupe de France AoE II compte 128 places et si l’inscription est <span>ouverte à tous les elos</span>, seuls les 128 joueurs ayant l’elo max RM le plus élevé pourront participer.</p>
                    <p>Le tournoi se décompose en <span>deux phases principales</span> :</p>
                    <p class="indentation">La première se tiendra sur 2 tours et se jouera exclusivement en Bo1.  A l’exception des 8 joueurs ayant l’elo RM le plus élevé à l’inscription, les rencontres seront tirées au sort avant le premier tour.</p>
                    <p class="indentation">La seconde débutera au troisième tour (16ème de finale) et se jouera en Bo3, Bo5 et Bo7 en fonction du niveau d’avancement de la compétition. Tous les joueurs seront alors placés en fonction de leur elo RM maximal. Il est à noter que les <span>32 joueurs qui atteindront ce stade de la compétition</span> recevront du CP.</p>
                    <p>Nous avons donc fait le choix de proposer à la communauté un tournoi exigeant, dont la victoire est loin d’être acquise pour les favoris et que nous avons souhaité aussi plaisant à jouer qu’à suivre en tant que spectateur.</p>
                </div>
            </div>
            <div class="bracket">
                <input id="bracket" type="checkbox" v-model="bracketCheck">
                <label for="bracket">
                    <h2 class="font-title">L'ARBRE DU TOURNOI</h2>
                    <Font-awesome-icon v-if="bracketCheck" class="icon-format" :icon="['fas', 'chevron-up']" />
                    <Font-awesome-icon v-else class="icon-format" :icon="['fas', 'chevron-down']" />
                </label>
                <div class="font-text-light text text-bracket">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam nulla dolorem distinctio doloribus eligendi perferendis nam fugit, necessitatibus velit voluptas rerum totam illo architecto quibusdam officia neque quos laudantium.
                </div>
            </div>
            <div class="cashprize">
                <input id="cashprize" type="checkbox" v-model="cashprizeCheck">
                <label for="cashprize">
                    <h2 class="font-title">LE CASHPRIZE</h2>
                    <Font-awesome-icon v-if="cashprizeCheck" class="icon-format" :icon="['fas', 'chevron-up']" />
                    <Font-awesome-icon v-else class="icon-format" :icon="['fas', 'chevron-down']" />
                </label>
                <div class="font-text-light text text-cashprize">
                    <p>Initialement de 1500 €, le cashprize total de l’événement s’élève désormais à <span>1780 €</span> et sera attribué à tous les joueurs ayant atteint les 16èmes de finale sur base de la répartition suivante :</p>
                    <tbody>
                        <tr><td>1er</td><td>765 euros</td></tr>
                        <tr><td>2e</td><td>465 euros</td></tr>
                        <tr><td>3e</td><td>215 euros</td></tr>
                        <tr><td>4e</td><td>115 euros</td></tr>
                        <tr><td>5e-8e</td><td>15 euros / joueur</td></tr>
                        <tr><td>9e-16e</td><td>10 euros / joueur</td></tr>
                        <tr><td>17e-32e</td><td>5 euros / joueur</td></tr>
                    </tbody>
                </div>
            </div>
            <div class="players">
                <input id="player" type="checkbox" v-model="playersCheck">
                <label for="player">
                    <h2 class="font-title">LES JOUEURS</h2>
                    <Font-awesome-icon v-if="playersCheck" class="icon-format" :icon="['fas', 'chevron-up']" />
                    <Font-awesome-icon v-else class="icon-format" :icon="['fas', 'chevron-down']" />
                </label>
                <div class="font-text-light text text-players">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam nulla dolorem distinctio doloribus eligendi perferendis nam fugit, necessitatibus velit voluptas rerum totam illo architecto quibusdam officia neque quos laudantium.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            'bracketCheck': false,
            'cashprizeCheck': false,
            'infosCheck': false,
            'playersCheck': false
        }
    }
}
</script>
<style lang="scss" scoped>
    h1 {
        position: relative;
        text-align: center;
        text-decoration: underline;
        width: max-content;
        margin: 0.5em auto 1.5em auto;
        &::after, &::before {
            display: block;
            content: '';
            background-image: url('~/assets/image/Logo_CDF.png');
            background-size: 80px 80px;
            width: 80px;
            height: 80px;
            position: absolute;
            z-index: 5;
            top: -20px;
        }
        &::after {
            right: -90px;
        }
        &::before {
            left: -90px;
        }
    }

    h1, div {
        color: var(--color-text);
    }

    .dropdown-menu {
        background-color: var(--color-black);
        border-radius: 15px;
        padding: 1.5em;
        margin-bottom: 2em;
        & div:not(:last-child) {
            margin-bottom: 1em;
        }
    }

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"] {
        & ~ .text {
            height: 0px;
            overflow: hidden;
            transition: .3s linear;
            line-height: 130%;
        }
        &:checked ~ .text {
            padding-top: 0.75em;
            margin-bottom: 2em;
            transition: .3s linear;
            &-infos{
                height: 360px;
            }
            &-bracket {
                height: 200px;
            }
            &-cashprize {
                height: 300px;
            }
            &-players {
                height: 200px;
            }
        }
    }

    .icon-format {
        font-size: 1.3em;
        color: var(--color-text-highlight);
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h2 {
        color: var(--color-text);
        transition: .2s ease-in-out;
        &:hover {
            cursor: pointer;
            color: var(--color-text-highlight);
            transition: .2s ease-in-out;
        }
    }

    .text {
        height: 0px;
        display: flex;
        flex-direction: column;
        letter-spacing: 0.5px;
        text-align: justify;
        & p:not(:last-child) {
            margin-bottom: .5em;
        }
        & span {
            color: var(--color-text-highlight)
        }
        & .indentation {
            margin-left: 2em;
        }
    }

    tbody {
        margin-left: 2em;
        border-radius: 8px;
        border: var(--color-text) 1px solid;
        overflow: hidden;
        width: max-content;
        & td {
            text-align: center;
            padding: 0.4em 1em;
            border: var(--color-text) 1px solid;
        }
    }
</style>
