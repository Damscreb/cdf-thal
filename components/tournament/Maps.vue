<template>
    <div>
        <input id="maps" type="checkbox">
        <label for="maps">
            <h2>LES MAPS</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="text text-maps">
            <p>Toutes les informations concernant les maps pour le tournoi sont disponibles sur le <a class="discord" href="https://discord.gg/BankCjPtg2" target="_blank">discord de la compétition</a></p>
            <p><span>Le nom du Map pack</span> pour avoir toutes les cartes en jeu est « Coupe de France 2021 – Map Pack »</p>
            <p>Aperçu des différentes cartes du tournois :</p>
            <div v-if="images.length > 0" class="map-container">
                <a v-for="image in images" :key="image.pathLong" class="image-and-name" :href="`https://liquipedia.net/ageofempires/${image.name}`" target="_blank">
                    <h3>{{ image.name }}</h3>
                    <img :src="image.pathShort" :alt="`Image de la map ${image.name}`" />
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: [],
        }
    },
    methods: {
        importAll(importedImages) {
            importedImages.keys().forEach((key) => {
                const shortKey = key.split('/');
                const shortKeyUnformated = shortKey[1].split('.');
                this.images.push({
                    name: `${shortKeyUnformated[0]}`,
                    pathLong: importedImages(key),
                    pathShort: require(`../../assets/image/map/${shortKey[1]}`),
                })
            });
        },
    },
    mounted() {
        this.importAll(require.context('../../assets/image/map', true, /\.png$/u));
    },
}
</script>
<style lang="scss" scoped>
    .map-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        padding: 0 0.5em;
    }

    .image-and-name {
        margin: 0.5em 0;
        color: var(--color-text);
        transition: .2s linear;
        background-color: var(--color-black);
        border-radius: 15px;
        border: 1.5px transparent solid;
        padding: 0 10px;
        width: max-content;
        margin-inline: auto;
        &:hover {
            object-fit:cover;
            text-decoration: none;
            cursor: pointer;
            color: var(--color-text-highlight);
            transform: scale(1.5);
            transition: .2s linear;
            border: 1.5px var(--color-text-highlight) solid;
        }
        & h3 {
            padding: 0.5em 0 0 0.5em;
        }
    }

    img {
        width: 250px;
        height: 150px;
        margin: 0.5em 0;
    }

    input[type="checkbox"] {
        display: none;
        & ~ .text {
            height: 0px;
            overflow: hidden;
            transition: .3s linear;
            line-height: 130%;
        }
        &:checked ~ .text {
            padding-top: 0.75em;
            padding-bottom: 2em;
            transition: .3s linear;
            position: relative;
            &-maps{
                height: 1200px;
                overflow: visible;
            }
            &::after  {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--color-text-highlight);
                position: absolute;
                bottom: 5px;
                border-radius: 1px;
            }
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
        & a:hover {
            text-decoration: underline;
        }
        & .discord {
            color: var(--color-text-highlight);
        }
    }

    @media all and (max-width: 1100px) {
        .map-container {
            padding-bottom: 2em;
            overflow-y: scroll;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 1fr);
            padding: 0 0.5em;
        }

        input[type="checkbox"]:checked ~ .text-maps{
            height: 650px;
        }

        .image-and-name {
            &:hover {
                transform: scale(1);
            }
        }
    }

    @media all and (max-width: 700px) {
        .map-container {
            height: auto;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(14, 1fr);
            grid-row-gap: 15px;
        }

        .image-and-name {
            width: 90%;
            height: 100%;
            img {
                width: 100%;
                height: 80%;
                margin: 0.2em 0 0.5em 0;
            }
        }
    }
</style>
