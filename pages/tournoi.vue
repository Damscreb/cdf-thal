<template>
    <div class="tournament">
        <h1 class="font-title">TOUTES LES INFORMATIONS RELATIVES AU TOURNOI</h1>
        <div class="dropdown-menu">
            <GeneralInfos/>
            <Cashprize/>
            <Rules/>
            <Bracket/>
            <Maps/>
            <Players/>
        </div>
    </div>
</template>
<script>
import Bracket from '~/components/tournament/Bracket.vue'
import Cashprize from '~/components/tournament/Cashprize.vue'
import GeneralInfos from '~/components/tournament/GeneralInfos.vue'
import Maps from '~/components/tournament/Maps.vue'
import Players from '~/components/tournament/Players.vue'
import Rules from '~/components/tournament/Rules.vue'
export default {
    components: {
        Bracket,
        Cashprize,
        GeneralInfos,
        Maps,
        Players,
        Rules,
    },
}
</script>
<style lang="scss" scoped>
    .tournament {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        position: relative;
        text-align: center;
        text-decoration: underline;
        margin: 0.5em 0 1.5em 0;
        &::after, &::before {
            display: block;
            content: '';
            background-image: url('~/assets/image/Logo_CDF.png');
            background-size: 80px 80px;
            width: 80px;
            height: 80px;
            position: absolute;
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

    @media all and (max-width: 1100px){
        h1 {
            &::after, &::before {
                display:none;
            }
        }
    }

    @media all and (max-width: 500px){
        .players-display {
            border-top: 2px var(--color-text-highlight) solid;
            border-bottom: 2px var(--color-text-highlight) solid;
            height: 500px;
        }

        .dropdown-menu {
            padding: 1em;
            margin-inline: 0.3em;
        }
    }
</style>
