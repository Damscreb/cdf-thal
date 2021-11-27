<template>
    <div id="player-div">
        <input id="player" type="checkbox">
        <label for="player">
            <h2 class="font-title">LES JOUEURS</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="font-text text text-players players-display">
            <Player v-for="player in players" :key="player.name" :name="player.name" :avatar="player.avatar" />
        </div>
    </div>
</template>
<script>
import Player from '~/components/Player.vue'
export default {
    'components': {Player},
    data () {
        return {
            'players': []
        }
    },
    mounted () {
        this.players = this.$getPlayerData();
    }
}
</script>
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
            margin-top: 1em;
            padding-bottom: 2em;
            transition: .3s linear;
            position: relative;
            &-players{
                height: 480px;
                overflow-y: scroll;
                &::after  {
                    content: '';
                    display:inline-block;
                    width: 100%;
                    height: 2px;
                    background-color: var(--color-text-highlight);
                    bottom: -32px;
                    border-radius: 1px;
                    position: relative;
                }
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

    .players-display {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        height: 800px;
        overflow-y: scroll;
        background-color: var(--color-main-background-color);
        border-radius: 15px;
        scrollbar-color: var(--color-text-highlight) var(--color-main-background-color);
    }
</style>
