<template>
    <main>
        <NavBar/>
        <Nuxt/>
        <div class="main-background">
            <div class="black-filter"></div>
            <img src="~/assets/image/background_image.jpeg" alt="background"/>
        </div>
        <Footer/>
    </main>
</template>
<script>
import Footer from '~/components/Footer.vue';
import NavBar from '~/components/NavBar.vue';

export default {
    components: {
        Footer,
        NavBar,
    },
    data() {
        return {
            routeName: [
                {
                    name: 'Accueil',
                    route: 'index',
                },
                {
                    name: 'Tournoi',
                    route: 'tournoi',
                },
                {
                    name: 'Thalounette',
                    route: 'thalounette',
                },
                {
                    name: 'Cast',
                    route: 'cast',
                },
                {
                    name: 'L\'équipe',
                    route: 'équipe',
                },
            ],
        }
    },
    head() {
        return {
            title: `Site de la CDF - ${this.routeName.find((object) => object.route === this.$route.name).name}`,
        }
    },
};
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: auto;
    }

    .font-title, h1, h2, h3 {
        font-family: "Inter Bold";
    }

    .font-text, p, a, span, div, h4, th, td {
        font-family: "Inter";
    }

    .font-text, p, a, div, h4, th, td {
        color: var(--color-text);
    }

    .font-text-light {
        font-family: "Inter Light";
    }

    a {
        text-decoration: none;
    }

    input[type="checkbox"] ~ label svg {
        transition: .3s ease-out;
    }

    input[type="checkbox"]:checked ~ label svg {
        transition: .3s ease-in;
        transform: rotate(90deg);
    }
</style>
<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        padding-top: 6em;
        margin: auto;
        max-width: 1200px;
        width: 100%;
        min-height: 91.6vh;
    }

    .black-filter{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        background: radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.8) 100%);
    }

    .main-background {
        height: 100%;
        width: 100vw;
        top: 0;
        left: 0;
        position: fixed;
        background-color: var(--color-main-background-color);
        z-index: -2;
        & img {
            filter: blur(5px);
            height: 100vh;
            width: 100vw;
            object-fit: cover;
            object-position: 50% 0;
        }
    }

    @media all and (max-width: 500px) {
        main {
            padding-top: 0em;
            min-height: 100vh;
        }
    }
</style>
