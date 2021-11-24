<template>
    <footer>
        <a href="https://www.twitch.tv/thalounette">
            <Font-awesome-icon class="icon twitch" :icon="['fab', 'twitch']" /><h3 class="font-text">Twitch</h3>
        </a>
        <a href="https://www.youtube.com/channel/UCZxpgDdokrp3rjLxuM69pRA">
            <Font-awesome-icon class="icon youtube" :icon="['fab', 'youtube']" /><h3 class="font-text">Youtube</h3>
        </a>
        <a href="https://twitter.com/Thalounette_">
            <Font-awesome-icon class="icon twitter" :icon="['fab', 'twitter']" /><h3 class="font-text">Twitter</h3>
        </a>
        <a href="https://discord.gg/BankCjPtg2">
            <Font-awesome-icon class="icon discord" :icon="['fab', 'discord']" /><h3 class="font-text">Discord</h3>
        </a>
    </footer>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
    footer {
        background-color: var(--color-black);
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 15px 15px 0 0;
        padding: 0 1em;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-inline: 0.5em;
        text-decoration: none;
    }

    h3 {
        margin: 1em 0em 1em .5em;
        color: var(--color-text);
        transition: 0.2s ease-in-out;
        &:hover {
            cursor: pointer;
            transition: 0.2s ease-in-out;
        }
    }

    .icon {
        font-size: 1.5em;
    }

    .twitch, .twitch ~ h3:hover {
        color: #6441a5;
    }

    .youtube, .youtube ~ h3:hover {
        color: #c4302b;
    }

    .twitter, .twitter ~ h3:hover {
        color: #00acee;
    }

    .discord, .discord ~ h3:hover {
        color: #738adb;
    }
</style>
