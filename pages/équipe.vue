<template>
    <div>
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <div class="description">
            <h2 class="font-title">PRÉSENTATION DE L'ÉQUIPE DE LA COUPE DE FRANCE AoE2</h2>
            <div class="presentation font-text">
                <div>
                    <h3 class="font-title">Sponsor :</h3>
                    <p>Ausitin</p>
                </div>

                <div>
                    <h3 class="font-title">Organisateur-trice-s :</h3>
                    <p>Thalounette (Host)</p>
                    <p>Ausitin</p>
                    <p>Aramatu</p>
                    <p>Korkhov</p>
                    <p>Melo</p>
                </div>

                <div>
                    <h3 class="font-title">Administrateur-trice-s :</h3>
                    <p>DaisyChain</p>
                    <p>D.C.A</p>
                    <p>Edowyth</p>
                    <p>Homoerexctus</p>
                    <p>le_chaton</p>
                    <p>Pas Charmant </p>
                    <p>Phare_Macie</p>
                </div>

                <div>
                    <h3 class="font-title">Choix des cartes :</h3>
                    <p>Miaou</p>
                    <p>Wolf Silver</p>
                    <p>Phare_Macie</p>
                </div>

                <div>
                    <h3 class="font-title">Consultants :</h3>
                    <p>Margougou</p>
                    <p>Sitaux</p>
                </div>

                <div>
                    <h3 class="font-title">Développeur Web :</h3>
                    <p>Elunnor</p>
                    <p>le_chaton</p>
                </div>
            </div>
        </div>
    </div>
</template>
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

    h3 {
        color: var(--color-text-highlight);
        margin-bottom: 1em;
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: 50% 20%;
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

    .presentation {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        & div {
            margin: 1em 2em;
            text-align: left;
            width: 20%;
            background-color: var(--color-black);
            border-radius: 15px;
            padding: 1em;
        }
        & h3 {
            position: relative;
            width: max-content;
        }
        & div > h3::after {
            position: absolute;
            content: '';
            height: 2px;
            width: 0;
            left: -1px;
            bottom: -1px;
            background: var(--color-text);
            transition: .3s;
        }
        & div:hover > h3::after {
            width: 100%;
        }
    }
</style>
