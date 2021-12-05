<template>
    <div class="staff">
        <img src="~/assets/image/Affiche_CDF.png" alt="Affiche du CDF">
        <div class="description">
            <h2>PRÉSENTATION DE L'ÉQUIPE DE LA COUPE DE FRANCE AoE2</h2>
            <div class="presentation font-text">
                <div class="sponsor">
                    <h3><p class='emoji'>&#x1F4B0;</p> Sponsor:</h3>
                    <div>
                        <p>Ausitin</p>
                    </div>
                </div>

                <div class="orga">
                    <h3><p class='emoji'>&#x1F4DA;</p> Organisateur-trice-s:</h3>
                    <div class="username-big">
                        <p>Thalounette (Host)</p>
                        <p>Ausitin</p>
                        <p>Aramatu</p>
                        <p>Korkhov</p>
                        <p>Melo</p>
                    </div>
                </div>

                <div class="admin">
                    <h3><p class='emoji'>&#x1F4DD;</p> Administrateur-trice-s:</h3>
                    <div class="username-big">
                        <p>DaisyChain</p>
                        <p>D.C.A</p>
                        <p>Edowyth</p>
                        <p>Homoerexctus</p>
                        <p>le_chaton</p>
                        <p>Pas Charmant </p>
                        <p>Phare_Macie</p>
                    </div>
                </div>

                <div class="maps">
                    <h3><p class='emoji'>&#x1F4CD;</p> Choix des cartes:</h3>
                    <div class="username">
                        <p>Miaou</p>
                        <p>Phare_Macie</p>
                        <p>Wolf Silver</p>
                    </div>
                </div>

                <div class="consulting">
                    <h3><p class='emoji'>&#x1F4A1;</p> Consultants:</h3>
                    <div class="username">
                        <p>Margougou</p>
                        <p>Sitaux</p>
                    </div>
                </div>

                <div class="dev">
                    <h3><p class='emoji'>&#128187;</p> Développeurs Web:</h3>
                    <div class="username">
                        <p><a href="https://github.com/Damscreb" target="_blank">Elunnor</a></p>
                        <p>le_chaton</p>
                    </div>
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
        margin-inline: auto;
        max-width: 100%;
        width: max-content;
        display: flex;
        align-items: center;
        word-wrap: break-word;
    }

    p.emoji {
        font-size: 25px;
        margin-bottom: 0;
        margin-right: 0.25em;
        display: inline;
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

    .staff {
        margin-bottom: 1em;
    }

    .description {
        display:flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 1em;
        max-width: 100%;
        padding: 0 1em;
    }

    .presentation {
        width: 100%;
        display: grid;
        grid-template-areas: 'sponsor orga orga orga' 'admin admin admin maps' 'consulting consulting dev dev';
        grid-gap: 10px;
        & .sponsor {
            grid-area: sponsor;
        }
        & .orga {
            grid-area: orga;
        }
        & .admin {
            grid-area: admin;
        }
        & .maps {
            grid-area: maps;
        }
        & .consulting {
            grid-area: consulting;
        }
        & .dev {
            grid-area: dev;
        }
        & > div {
            text-align: center;
            background-color: var(--color-black);
            box-shadow: var(--color-boxshadow1) 0px 10px 25px -20px, var(--color-boxshadow2) 0px 10px 20px -15px, var(--color-boxshadow3) 0px -2px 12px 0px inset;
            border-radius: 15px;
            padding: 1em;
            word-wrap: break-word;
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
        & .username-big {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
        & .username {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(1, 1fr);
        }
    }

    @media all and (max-width: 500px) {
        .presentation {
            grid-template-areas: 'sponsor' 'orga' 'admin' 'maps' 'consulting' 'dev';
        }
    }
</style>
