<template>
    <div class="tournament">
        <h1 class="font-title">TOUTES LES INFORMATIONS RELATIVES AU TOURNOI</h1>
        <div class="dropdown-menu">
            <GeneralInfos />
            <Cashprize />
            <Bracket />
            <Players />
            <Maps />
        </div>
    </div>
</template>
<script>
import Bracket from '~/components/tournament/Bracket.vue'
import Cashprize from '~/components/tournament/Cashprize.vue'
import GeneralInfos from '~/components/tournament/GeneralInfos.vue'
import Maps from '~/components/tournament/Maps.vue'
import Players from '~/components/tournament/Players.vue'
export default {
    'components': {
        Bracket,
        Cashprize,
        GeneralInfos,
        Maps,
        Players
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
</style>
