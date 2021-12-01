<template>
    <div class="cast-page">
        <v-select v-model="selectedCaster" :options="casters" label="name" :selectable="optionSelectable" v-on:open="refreshLiveStreams()">
            <template v-slot:option="option">
                {{ option.name }}<span v-if="isLive(option.channel)" class="live-tag">live</span>
            </template>
        </v-select>

        <iframe
            v-if="selectedCaster"
            :src="`https://player.twitch.tv/?channel=${selectedCaster.channel}&parent=localhost&muted=true`"
            frameborder="0" allowfullscreen="true" scrolling="no" height="500px" width="80%"/>
    </div>
</template>
<script>
import vSelect from 'vue-select';

const casters = [
    {
        channel: 'themole67',
        name: 'Themole',
    },
    {
        channel: 'ciskhan_',
        name: 'Ciskhan',
    },
    {
        channel: '',
        name: 'Colem',
    },
    {
        channel: 'commandeur_rod',
        name: 'Commandeur_rod ',
    },
    {
        channel: 'elhyar_',
        name: 'Elhyar',
    },
    {
        channel: '',
        name: 'Iceofempire',
    },
    {
        channel: 'melon_l_esturgeon',
        name: 'Melo',
    },
    {
        channel: 'luldorelle',
        name: 'SMOC Vince',
    },
    {
        channel: 'sylenixfr',
        name: 'Sylenix',
    },
    {
        channel: 'thalounette',
        name: 'Thalounette',
    },
    {
        channel: 'tutusasylum',
        name: 'Tutus',
    },
].sort((casterA, casterB) => casterA.name.localeCompare(casterB.name));

export default {
    async asyncData({$twitch}) {
        const liveChannels = await $twitch.areStreamsLive(casters.map(caster => caster.channel));
        return {liveChannels};
    },
    components: {vSelect},
    data() {
        return {
            casters,
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
            this.liveChannels = await this.$twitch.areStreamsLive(casters.map(caster => caster.channel));
        },
    },
    mounted() {
        this.selectedCaster = casters.find(this.optionSelectable);
    },
};
</script>
<style scoped lang="scss">
    .cast-page {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .v-select {
        min-width: 250px;
    }
    .live-tag {
        color: red;
        padding-left: 5px;
    }
</style>
<style lang="scss">
    .vs__dropdown-option {
        display: flex;
        justify-content: space-between;
    }
</style>
