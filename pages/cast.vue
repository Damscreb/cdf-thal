<template>
    <div class="cast-page">
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
