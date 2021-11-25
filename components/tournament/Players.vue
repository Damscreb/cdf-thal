<template>
    <div>
        <input id="player" type="checkbox">
        <label for="player">
            <h2 class="font-title">LES JOUEURS</h2>
            <Font-awesome-icon class="icon-format" :icon="['fas', 'chevron-right']" />
        </label>
        <div class="font-text text text-players">
            <PlayerList />
        </div>
    </div>
</template>
<script>
import PlayerList from '~/components/utils/PlayerList.vue'
export default {
    'components': {PlayerList}
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
            padding-top: 0.75em;
            padding-bottom: 2em;
            transition: .3s linear;
            &-players{
                height: 480px;
            }
            &::after  {
                content: '';
                width: 100%;
                height: 2px;
                background-color: var(--color-text-highlight);
                position: absolute;
                bottom: 10px;
                border-radius: 1px;
            }
        }
    }

    .icon-format {
        cursor: pointer;
        font-size: 1.3em;
        color: var(--color-text-highlight);
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &:hover{
            cursor: pointer;
            & h2 {
                color: var(--color-text-highlight);
                transition: .1s ease-in-out;
            }
        }
    }

    h2 {
        color: var(--color-text);
        transition: .1s ease-in-out;
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
</style>
