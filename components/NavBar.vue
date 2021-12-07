<template>
    <nav>
        <div class="nav-responsive">
            <NavbarItem link="" icon="home" name="Accueil"/>
            <NavbarItem link="tournoi" icon="gamepad" name="Tournoi"/>
            <NavbarItem link="thalounette" icon="female" name="Thalounette"/>
            <NavbarItem link="cast" icon="twitch" name="Cast"/>
            <NavbarItem link="équipe" icon="users" name="L'équipe"/>
            <SwitchTheme/>
        </div>
    </nav>
</template>
<script>
import NavbarItem from '~/components/utils/NavbarItem.vue';
import SwitchTheme from '~/components/SwitchTheme.vue';

export default {
    components: {
        NavbarItem,
        SwitchTheme,
    },
};
</script>
<style scoped lang="scss">
    nav {
        position: fixed;
        top: 15px;
        z-index: 5;
        background-color: var(--color-black);
        box-shadow: inset 0 0 0 2px var(--color-text-highlight);
        border-radius: 15px;
        width: inherit;
        max-width: inherit;
        height: 60px;
        & > .nav-responsive {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
            padding: 0 1em;
        }
    }
    @media all and (max-width: 500px) {
        nav {
            border-radius: 0;
            border: none;
            bottom: 0px;
            top: unset;
            box-shadow: inset 0 10px 10px -7px var(--color-text-highlight);
        }
        .nav-responsive {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>
