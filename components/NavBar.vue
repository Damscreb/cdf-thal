<template>
    <nav>
        <div class="nav-responsive">
            <Nuxt-Link exact-active-class="underline" to="/">
                <Font-awesome-icon class="icon" :icon="['fas', 'home']" />
                <h3 class="font-text">Accueil</h3>
            </Nuxt-Link>
            <Nuxt-Link exact-active-class="underline" to="/tournoi">
                <Font-awesome-icon class="icon" :icon="['fas', 'gamepad']" />
                <h3 class="font-text">Tournoi</h3>
            </Nuxt-Link>
            <Nuxt-Link exact-active-class="underline" to="/thalounette">
                <Font-awesome-icon class="icon" :icon="['fas', 'hashtag']" />
                <h3 class="font-text">Thalounette</h3>
            </Nuxt-Link>
            <Nuxt-Link exact-active-class="underline" to="/équipe">
                <Font-awesome-icon class="icon" :icon="['fas', 'users']" />
                <h3 class="font-text">L'équipe</h3>
            </Nuxt-Link>
        </div>
    </nav>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
    nav {
        position: fixed;
        z-index: 5;
        top: 15px;
        background-color: var(--color-black);
        border-radius: 15px;
        width: inherit;
        max-width: inherit;
        height: 60px;
        & > .nav-responsive {
            display: flex;
            flex-direction: row;
            height: 100%;
            padding: 0 1em;
        }
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        & .icon {
            display: none;
            font-size: 1.5em;
            color: var(--color-text);
            transition: 0.2s ease-in-out;
        }
        & h3 {
            position: relative;
            margin: 1em;
            margin-left: 0.5em;
            width: max-content;
            color: var(--color-text);
            transition: 0.2s ease-in-out;
        }
        &:hover {
            cursor: pointer;
            & .icon, & h3 {
                color: var(--color-text-highlight);
                transition: 0.2s ease-in-out;
            }
        }
    }

    .underline {
        & h3 {
            transition: 0.2s ease-in-out;
            &::after {
            content: '';
            width: 100%;
            height: 2px;
            background-color: var(--color-text-highlight);
            position: absolute;
            bottom: -3px;
            left: 0px;
            transition: 0.2s ease-in-out;
            }
            &:hover::after {
                background-color: var(--color-text);
                transition: 0.2s ease-in-out;
            }
        }
        & .icon {
            color: var(--color-text-highlight);
            transition: 0.2s ease-in-out;
        }
    }

    @media all and (max-width: 500px){
        .nav-responsive {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        a {
            & .icon {
                display: initial;
                margin-inline: 1em;
            }
            & h3 {
                display: none;
            }
        }
    }
</style>
