<template>
    <div>
        <v-select v-model="selectedCaster" :options="casters" label="name"></v-select>

        <div class="iframe">
            <iframe
                :src="twitchUrl(selectedCaster)"
                frameborder="0" allowfullscreen="true" scrolling="no" height="500px" width="80%"/>
        </div>
    </div>
</template>
<script>
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
        channel: '?',
        name: 'Colem',
    },
    {
        channel: 'commandeur_rod',
        name: 'Comm..._rod',
    },
    {
        channel: 'elhyar_',
        name: 'Elhyar',
    },
    {
        channel: '?',
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
    asyncData(ctx) {
        // eslint-disable-next-line
        console.log(ctx);
        return {name: 'page name'};
    },
    data() {
        return {
            casters,
            selectedCaster: casters[0],
            twitchUrl(caster) {
                return `https://player.twitch.tv/?channel=${caster.name}&parent=damscreb.github.io&muted=true`;
            },
        };
    },
};
</script>
<style scoped>

</style>
