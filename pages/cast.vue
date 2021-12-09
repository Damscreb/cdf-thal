<template>
    <div class="cast-page">
        <h2>Planning des matchs du tournoi</h2>
        <iframe
            class="teamup"
            src="https://teamup.com/ksrtvtscjr7h5jkb72?showProfileAndInfo=0&showSidepanel=1&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1"
            frameborder="0"/>

        <h2>Retrouvez votre casteur préféré</h2>
        <v-select v-if="casters" v-model="selectedCaster" :options="casters" label="name" :selectable="optionSelectable" v-on:open="refreshLiveStreams()">
            <template v-slot:option="option">
                {{ option.name }}<span v-if="isLive(option.channel)" class="live-tag">live</span>
            </template>
        </v-select>

        <iframe
            v-if="selectedCaster"
            :src="`https://player.twitch.tv/?channel=${selectedCaster.channel}&parent=damscreb.github.io&muted=true`"
            frameborder="0" allowfullscreen="true" scrolling="no" height="500px" width="80%"/>

    </div>
</template>
<script>
import data from '~/content/Liste_casters_CDF.json'
import vSelect from 'vue-select';
export default {
    async asyncData({$twitch}) {
        const liveChannels = await $twitch.areStreamsLive(data.map((caster) => caster.channel));
        return {liveChannels};
    },
    components: {vSelect},
    data() {
        return {
            casters: null,
            selectedCaster: null,
        };
    },
    methods: {
        isLive(channelName) {
            return this.liveChannels.find((channel) => channel.userName === channelName);
        },
        optionSelectable(caster) {
            return caster.channel && caster.channel.length > 0;
        },
        async refreshLiveStreams() {
            this.liveChannels = await this.$twitch.areStreamsLive(data.map((caster) => caster.channel));
        },
    },
    mounted() {
        this.casters = data.sort((casterA, casterB) => casterA.name.localeCompare(casterB.name))
        this.selectedCaster = this.casters.find(this.optionSelectable);
    },
};
</script>
<style scoped lang="scss">
    .cast-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        & iframe {
            margin: 1.4em 0;
        }
    }

    .v-select {
        min-width: 250px;
    }

    .live-tag {
        color: red;
        padding-left: 5px;
    }

    h2 {
        margin-inline: auto;
        font-size: 1.7em;
        position: relative;
        width: auto;
        text-align: center;
        &:last-of-type {
            margin-bottom: 0.7em;
        }
        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: var(--color-text-highlight);
            bottom: 0px;
            left: 0px;
        }
    }

    .teamup{
        width: 95%;
        height: 650px;
        border: 1px solid #cccccc;
        color: grey;
    }

    @media all and (max-width: 500px) {
        h2 {
            padding: 0.5em 0.2em 0 0.2em;
            &::after {
                top: 0px;
                bottom: unset;
            }
        }

        .teamup{
            width: 90%;
            height: 450px;
        }
    }
</style>
<style lang="scss">
    .vs__dropdown-option {
        display: flex;
        justify-content: space-between;
    }
</style>
